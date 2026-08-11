import { BadRequestException, ConflictException, NotFoundException, UnprocessableEntityException } from "@nestjs/common";

/** Thrown when a school has no CONNECTED WhatsApp connection but one is required
 *  (e.g. trying to send a notification, or disconnect with nothing connected). */
export class WhatsAppNotConnectedException extends BadRequestException {
  constructor() {
    super("This school hasn't connected a WhatsApp number yet.");
  }
}

/** Thrown when a connection attempt is already in progress for the school. */
export class WhatsAppAlreadyConnectingException extends ConflictException {
  constructor() {
    super("A WhatsApp connection attempt is already in progress for this school.");
  }
}

/** Thrown when Meta's Graph API can't verify the WABA/phone number the frontend reported —
 *  we never mark a connection CONNECTED without this succeeding server-side. */
export class WhatsAppVerificationFailedException extends UnprocessableEntityException {
  constructor(reason: string) {
    super(`Couldn't verify the WhatsApp Business Account with Meta: ${reason}`);
  }
}

export class WhatsAppTemplateNotFoundException extends NotFoundException {
  constructor(name: string) {
    super(`No WhatsApp template named "${name}" is registered for this school.`);
  }
}

/** Wraps a Graph API failure with a message safe to show an admin / log — never includes the
 *  access token, and strips anything that looks like it could be a credential. */
export class WhatsAppGraphApiException extends BadRequestException {
  constructor(
    message: string,
    public readonly graphCode?: number
  ) {
    super(message);
  }
}
