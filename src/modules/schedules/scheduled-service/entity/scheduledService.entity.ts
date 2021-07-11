import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
export class ScheduledService extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('timestamptz')
  dateStart: Date;

  @Column('timestamptz')
  dateEnd: Date;

  @Column('enum', {
    enum: ScheduledServiceState,
    default: ScheduledServiceState.SCHEDULED, 
  })
  state: ScheduledServiceState

}
