import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import * as request from 'supertest';
import { SchedulesModule } from "../src/modules/schedules/schedules.module";
import { ScheduledServiceController } from "../src/modules/schedules/scheduled-service/controller/scheduledService.controller";

describe('SchedulesController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Has /scheduled_service (GET) working', () => {
    return request(app.getHttpServer())
      .get('/scheduled_service')
      .expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});