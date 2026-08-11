"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MessageCircleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { EmbeddedSignupResult } from "@/hooks/use-whatsapp";

// Meta's own JS SDK global — there's no official @types package for it, so this stays a thin
// ambient declaration rather than pulling in a whole third-party type dependency for one object.
declare global {
  interface Window {
    FB?: {
      init: (params: { appId: string; autoLogAppEvents: boolean; xfbml: boolean; version: string }) => void;
      login: (
        callback: (response: { authResponse?: { code?: string } | null; status?: string }) => void,
        params: {
          config_id: string;
          response_type: "code";
          override_default_response_type: true;
          extras: { setup: Record<string, never> };
        }
      ) => void;
    };
    fbAsyncInit?: () => void;
  }
}

const SDK_VERSION = "v22.0";
const SDK_SCRIPT_ID = "facebook-jssdk";

interface WhatsAppEmbeddedSignupData {
  phone_number_id?: string;
  waba_id?: string;
  business_id?: string;
}

interface WhatsAppEmbeddedSignupMessage {
  type: string;
  event: "FINISH" | "CANCEL";
  data?: WhatsAppEmbeddedSignupData & { current_step?: string; error_message?: string };
}

function loadFacebookSdk(appId: string): Promise<void> {
  return new Promise((resolve) => {
    if (window.FB) {
      resolve();
      return;
    }
    window.fbAsyncInit = () => {
      window.FB!.init({ appId, autoLogAppEvents: true, xfbml: true, version: SDK_VERSION });
      resolve();
    };
    if (document.getElementById(SDK_SCRIPT_ID)) return;
    const script = document.createElement("script");
    script.id = SDK_SCRIPT_ID;
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
  });
}

interface EmbeddedSignupButtonProps {
  onComplete: (result: EmbeddedSignupResult) => void;
  onCancel?: () => void;
  onError: (message: string) => void;
  disabled?: boolean;
}

/** Launches Meta's real, current (v4, popup-based) Embedded Signup flow — never a simulated or
 *  custom-built onboarding UI. Two independent pieces of data arrive asynchronously and in no
 *  guaranteed order: the WABA/phone/business ids (via a window "message" postMessage event from
 *  facebook.com) and the short-lived authorization code (via the FB.login() JS callback). Both
 *  are required before onComplete fires. */
export function EmbeddedSignupButton({ onComplete, onCancel, onError, disabled }: EmbeddedSignupButtonProps) {
  const [isLaunching, setIsLaunching] = useState(false);
  const signupDataRef = useRef<WhatsAppEmbeddedSignupData | null>(null);
  const codeRef = useRef<string | null>(null);
  const settledRef = useRef(false);

  const maybeComplete = useCallback(() => {
    const data = signupDataRef.current;
    const code = codeRef.current;
    if (!data?.waba_id || !data?.phone_number_id || !code || settledRef.current) return;

    settledRef.current = true;
    setIsLaunching(false);
    onComplete({ code, wabaId: data.waba_id, phoneNumberId: data.phone_number_id, businessId: data.business_id });
  }, [onComplete]);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (!event.origin.endsWith("facebook.com")) return;

      let payload: WhatsAppEmbeddedSignupMessage;
      try {
        payload = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
      } catch {
        return;
      }
      if (payload?.type !== "WA_EMBEDDED_SIGNUP") return;

      if (payload.event === "FINISH") {
        signupDataRef.current = payload.data ?? null;
        maybeComplete();
      } else if (payload.event === "CANCEL") {
        if (settledRef.current) return;
        settledRef.current = true;
        setIsLaunching(false);
        if (payload.data?.error_message) {
          onError(payload.data.error_message);
        } else {
          onCancel?.();
        }
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [maybeComplete, onCancel, onError]);

  async function handleClick() {
    const appId = process.env.NEXT_PUBLIC_META_APP_ID;
    const configId = process.env.NEXT_PUBLIC_META_EMBEDDED_SIGNUP_CONFIG_ID;
    if (!appId || !configId) {
      onError("WhatsApp isn't configured for this deployment yet. Contact your administrator.");
      return;
    }

    settledRef.current = false;
    signupDataRef.current = null;
    codeRef.current = null;
    setIsLaunching(true);

    try {
      await loadFacebookSdk(appId);
    } catch {
      setIsLaunching(false);
      onError("Couldn't load Meta's signup tool. Check your connection and try again.");
      return;
    }

    window.FB!.login(
      (response) => {
        if (response.authResponse?.code) {
          codeRef.current = response.authResponse.code;
          maybeComplete();
          return;
        }
        // The postMessage CANCEL/error listener above handles the user-facing message for
        // cancellation; if FB.login comes back with neither a code nor fires that event, treat
        // it as cancelled rather than leaving the button stuck in a loading state.
        if (!settledRef.current) {
          settledRef.current = true;
          setIsLaunching(false);
          onCancel?.();
        }
      },
      {
        config_id: configId,
        response_type: "code",
        override_default_response_type: true,
        extras: { setup: {} }
      }
    );
  }

  return (
    <Button onClick={handleClick} disabled={disabled || isLaunching}>
      <MessageCircleIcon />
      {isLaunching ? "Connecting..." : "Connect WhatsApp"}
    </Button>
  );
}
