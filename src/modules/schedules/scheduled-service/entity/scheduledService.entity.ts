import { IsDefined, IsEnum, IsIn } from "class-validator";
import { ExpandedEntity } from "base-extensions/expandedEntity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum ScheduledServiceState {
  SCHEDULED = 'scheduled',
  INITIATED = 'initiated',
  DONE = 'done',
  ABSENT = 'absent',
  CANCELLED = 'cancelled',
}

@Entity({
  name: 'scheduled_service',
  orderBy: {

  }
})
export class ScheduledService extends ExpandedEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('timestamptz')
  @IsDefined()
  dateStart!: Date;

  @Column('timestamptz')
  @IsDefined()
  dateEnd!: Date;

  @Column('enum', {
    enum: ScheduledServiceState,
    default: ScheduledServiceState.SCHEDULED, 
  })
  @IsEnum(ScheduledServiceState)
  state: ScheduledServiceState = ScheduledServiceState.SCHEDULED;

}
