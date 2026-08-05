import { Module } from "@nestjs/common";
import { AssetCategoryController } from "./asset-category.controller";
import { AssetCategoryService } from "./asset-category.service";
import { AssetController } from "./asset.controller";
import { AssetService } from "./asset.service";

@Module({
  controllers: [AssetCategoryController, AssetController],
  providers: [AssetCategoryService, AssetService]
})
export class InventoryModule {}
