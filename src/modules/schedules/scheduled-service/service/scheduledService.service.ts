import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScheduledService, ScheduledServiceState } from '../entity/scheduledService.entity';

@Injectable()
export class ScheduledServiceService {

  constructor(
    @InjectRepository(ScheduledService) 
    private scheduledServiceRepository: Repository<ScheduledService>
  ) {}

  getAll(): Promise<ScheduledService[]> {
    return this.scheduledServiceRepository.find();
  }

  getById(id: number): Promise<ScheduledService> {
    return this.scheduledServiceRepository.findOneOrFail(id);
  }

  create(
    dateStart: Date,
    dateEnd: Date,
    state: ScheduledServiceState
  ): Promise<ScheduledService> {
    const scheduledService: ScheduledService = 
      this.scheduledServiceRepository.create({
        dateStart,
        dateEnd,
        state,
      });
    return this.scheduledServiceRepository.save(scheduledService);
  }

  async updateById(
    id: number,
    dateStart: Date,
    dateEnd: Date,
    state: ScheduledServiceState
  ): Promise<ScheduledService> {
    const scheduledService = await this.getById(id);
    scheduledService.state = state;
    scheduledService.dateStart = dateStart;
    scheduledService.dateEnd = dateEnd;
    return this.scheduledServiceRepository.save(scheduledService);
  }

  async removeById(id: number): Promise<ScheduledService> {
    const scheduledService = await this.getById(id);
    return this.scheduledServiceRepository.remove(scheduledService);
  }


}
