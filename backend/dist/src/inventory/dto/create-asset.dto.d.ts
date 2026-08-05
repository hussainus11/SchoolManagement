import { AssetStatus } from "../../../generated/prisma/client";
export declare class CreateAssetDto {
    branchId: string;
    categoryId: string;
    name: string;
    serialNumber?: string;
    purchaseDate?: string;
    purchaseCost?: number;
    status?: AssetStatus;
    assignedToTeacherId?: string;
    location?: string;
    notes?: string;
}
