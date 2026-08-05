import { Type } from "class-transformer";
import {
  ArrayMinSize,
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  MaxLength,
  MinLength,
  ValidateNested
} from "class-validator";

export class LeaveGroupAllocationInput {
  @IsString()
  leaveTypeId: string;

  @IsNumber()
  @Min(0)
  daysPerYear: number;
}

export class CreateLeaveGroupDto {
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name: string;

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => LeaveGroupAllocationInput)
  allocations?: LeaveGroupAllocationInput[];
}
