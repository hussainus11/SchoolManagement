import { IsIn, IsObject, IsPhoneNumber } from "class-validator";
import { DEFAULT_WHATSAPP_TEMPLATES } from "../whatsapp.constants";

const TEMPLATE_NAMES = DEFAULT_WHATSAPP_TEMPLATES.map((t) => t.name);

export class SendTestMessageDto {
  @IsPhoneNumber(undefined, { message: "to must be a valid phone number in international format" })
  to!: string;

  @IsIn(TEMPLATE_NAMES)
  templateName!: string;

  @IsObject()
  variables!: Record<string, string>;
}
