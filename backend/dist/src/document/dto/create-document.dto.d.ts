import { DocumentOwnerType } from "../../../generated/prisma/client";
export declare class CreateDocumentDto {
    ownerType: DocumentOwnerType;
    ownerId: string;
    title: string;
}
