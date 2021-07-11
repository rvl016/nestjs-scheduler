import { Body, ClassSerializerInterceptor, Param, ParseIntPipe, UseFilters, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { Controller, Get, Patch, Post } from '@nestjs/common';
import { EntityNotFoundFilter } from 'src/exception-filters/entityNotFoundFilter';
import { ScheduledServiceCreateDto } from '../dto/scheduledServiceCreate.dto';
import { ScheduledServicePartialDto } from '../dto/scheduledServicePartial.dto';
import { ScheduledService } from '../entity/scheduledService.entity';
import { ScheduledServiceService } from '../service/scheduledService.service';

@Controller({path: '/scheduled_service'})
export class ScheduledServiceController {
    
  constructor(private scheduledServiceService: ScheduledServiceService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getScheduledService(): Promise<ScheduledService[]> {
    return this.scheduledServiceService.getAll();
  }

  @Get('/:scheduledServiceId')
  @UseFilters(EntityNotFoundFilter)
  getScheduledServiceById(
    @Param('scheduledServiceId', ParseIntPipe) id: number
  ) {
    return this.scheduledServiceService.getById(id);
  }

  @Post()
  createScheduledService(
    @Body(ValidationPipe) body: ScheduledServiceCreateDto
  ) {
    return this.scheduledServiceService.create(
      body.dateStart,
      body.dateEnd,
      body.state
    );
  }

  @Patch('/:scheduledServiceId')
  patchScheduledService(
    @Param('scheduledServiceId', ParseIntPipe) id: number,
    @Body() body: ScheduledServicePartialDto
  ) {
    return this.scheduledServiceService.updateById(
      id, 
      body.dateStart,
      body.dateEnd,
      body.state
    );
  }

}
