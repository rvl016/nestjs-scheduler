import { PartialType } from "@nestjs/mapped-types";
import { ScheduledServiceCreateDto } from "./scheduledServiceCreate.dto";

export class ScheduledServicePartialDto 
  extends PartialType(ScheduledServiceCreateDto) {}