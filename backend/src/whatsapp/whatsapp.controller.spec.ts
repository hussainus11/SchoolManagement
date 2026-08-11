import { Role } from "../../generated/prisma/client";
import type { JwtPayload } from "../auth/types/jwt-payload.type";
import { ConnectWhatsAppDto } from "./dto/connect-whatsapp.dto";
import { WhatsappController } from "./whatsapp.controller";
import type { WhatsappService } from "./whatsapp.service";

function fakeUser(schoolId: string): JwtPayload {
  return { sub: "user-1", role: Role.SCHOOL_ADMIN, schoolId, branchId: null };
}

describe("WhatsappController — tenant isolation", () => {
  let service: jest.Mocked<Pick<WhatsappService, "connect" | "getStatus" | "disconnect" | "sendNow">>;
  let controller: WhatsappController;

  beforeEach(() => {
    service = {
      connect: jest.fn().mockResolvedValue({ status: "CONNECTED" }),
      getStatus: jest.fn().mockResolvedValue({ status: "NOT_CONNECTED" }),
      disconnect: jest.fn().mockResolvedValue(undefined),
      sendNow: jest.fn().mockResolvedValue({})
    };
    controller = new WhatsappController(service as unknown as WhatsappService);
  });

  it("connect() always uses the authenticated admin's own schoolId, never anything from the request body", async () => {
    const dto = {
      code: "auth-code",
      wabaId: "waba-1",
      phoneNumberId: "phone-1",
      // Even if a caller tried to smuggle a schoolId into the body, ConnectWhatsAppDto has no such
      // field for it to land in — this simulates that attempt reaching the controller anyway.
      schoolId: "some-other-school"
    };

    await controller.connect(fakeUser("school-A"), dto as never);

    expect(service.connect).toHaveBeenCalledWith("school-A", dto);
    expect(service.connect).not.toHaveBeenCalledWith("some-other-school", expect.anything());
  });

  it("getStatus() is scoped to the caller's own school", async () => {
    await controller.getStatus(fakeUser("school-B"));
    expect(service.getStatus).toHaveBeenCalledWith("school-B");
    expect(service.getStatus).not.toHaveBeenCalledWith("school-A");
  });

  it("disconnect() is scoped to the caller's own school", async () => {
    await controller.disconnect(fakeUser("school-B"));
    expect(service.disconnect).toHaveBeenCalledWith("school-B");
  });

  it("ConnectWhatsAppDto has no schoolId field for a client to set", () => {
    const dto = new ConnectWhatsAppDto();
    expect("schoolId" in dto).toBe(false);
  });
});
