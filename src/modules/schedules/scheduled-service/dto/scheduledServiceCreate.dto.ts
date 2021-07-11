import { IsDate, IsDateString, IsEnum } from "class-validator";
import { ScheduledServiceState } from "../entity/scheduledService.entity";

export class ScheduledServiceCreateDto {
  
  @IsEnum(ScheduledServiceState)
  state: ScheduledServiceState;

  @IsDateString()
  dateStart: Date;

  @IsDateString()
  dateEnd: Date;
  
}