import { Module } from "@nestjs/common";
import { CustomRoleController } from "./custom-role.controller";
import { CustomRoleService } from "./custom-role.service";

@Module({
  controllers: [CustomRoleController],
  providers: [CustomRoleService],
  exports: [CustomRoleService]
})
export class CustomRoleModule {}
