import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduledServiceController } from './scheduled-service/controller/scheduledService.controller';
import { ScheduledServiceViewController } from './scheduled-service/controller/scheduledServiceView.controller';
import { ScheduledService } from './scheduled-service/entity/scheduledService.entity';
import { ScheduledServiceService } from './scheduled-service/service/scheduledService.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ScheduledService
        ]),
    ],
    controllers: [
        ScheduledServiceController,
        ScheduledServiceViewController
    ],
    providers: [
        ScheduledServiceService,
    ],
    exports: [
        TypeOrmModule
    ]
})
export class SchedulesModule { }
