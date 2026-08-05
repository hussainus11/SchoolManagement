import { IsString } from "class-validator";

export class AssignTransportDto {
  @IsString()
  studentId: string;

  @IsString()
  routeId: string;

  @IsString()
  stopId: string;
}
