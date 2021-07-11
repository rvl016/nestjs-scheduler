import { AdminModule } from "@admin-bro/nestjs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ScheduledService } from "src/modules/schedules/scheduled-service/entity/scheduledService.entity";
import { ScheduledServiceService } from "src/modules/schedules/scheduled-service/service/scheduledService.service";

export default AdminModule.createAdmin({
  adminBroOptions: {
    rootPath: '/admin',
    resources: [ScheduledService],
  },
});