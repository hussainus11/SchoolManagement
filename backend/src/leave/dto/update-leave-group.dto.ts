import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsOptional, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";
import { LeaveGroupAllocationInput } from "./create-leave-group.dto";

export class UpdateLeaveGroupDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => LeaveGroupAllocationInput)
  allocations?: LeaveGroupAllocationInput[];
}
