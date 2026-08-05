import { IsEnum, IsString, MaxLength, MinLength } from "class-validator";
import { DocumentOwnerType } from "../../../generated/prisma/client";

export class CreateDocumentDto {
  @IsEnum(DocumentOwnerType)
  ownerType: DocumentOwnerType;

  @IsString()
  ownerId: string;

  @IsString()
  @MinLength(1)
  @MaxLength(200)
  title: string;
}
