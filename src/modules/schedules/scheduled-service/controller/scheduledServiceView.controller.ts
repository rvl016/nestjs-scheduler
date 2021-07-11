import { Controller, Get, Render } from '@nestjs/common';

@Controller('/scheduled_service_view')
export class ScheduledServiceViewController { 

  @Get()
  @Render('schedules/scheduled_service/scheduled_service_list')
  index() {
    return {
      msg: "oi"
    };
  }

}
