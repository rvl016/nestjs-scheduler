import { Test, TestingModule } from "@nestjs/testing";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EntityNotFoundError, Repository } from "typeorm";
import { ScheduledService } from "../entity/scheduledService.entity";
import { ScheduledServiceService } from "../service/scheduledService.service";


describe('ScheduledService Service', () => {

  let service: ScheduledServiceService;

  let spyScheduledServiceRepository: Repository<ScheduledService>;

  let scheduledService1: ScheduledService;
  let scheduledService2: ScheduledService;
  
  let scheduledServices: Array<ScheduledService>;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ScheduledServiceService,
        {
          provide: 'ScheduledServiceRepository',
          useClass: Repository,
        }
      ],
    }).compile();

    service = module.get<ScheduledServiceService>(ScheduledServiceService);
    spyScheduledServiceRepository = module.get<Repository<ScheduledService>>('ScheduledServiceRepository');

    scheduledService1 = new ScheduledService();
    scheduledService1.id = 1;
    scheduledService1.dateStart = new Date(2021, 5, 20, 12, 0, 0);
    scheduledService1.dateEnd = new Date(2021, 5, 20, 13, 0, 0);
    
    scheduledService2 = new ScheduledService();
    scheduledService2.id = 2;
    scheduledService2.dateStart = new Date(2021, 5, 20, 14, 0, 0);
    scheduledService2.dateEnd = new Date(2021, 5, 20, 14, 30, 0);

    scheduledServices = [
      scheduledService1, 
      scheduledService2,
    ];

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {

    beforeAll(async () => {
      jest.spyOn(spyScheduledServiceRepository, 'find').mockResolvedValue(
        scheduledServices
      );
    });

    afterAll(() => {
      jest.spyOn(spyScheduledServiceRepository, 'find').mockClear();
    });

    it('should get all mock schedules', async () => {
      expect(await service.getAll()).toEqual(scheduledServices);
    });  
  });

  describe('getById', () => {

    it('should get an existing record', async () => {
      jest.spyOn(spyScheduledServiceRepository, 'findOneOrFail').mockResolvedValueOnce(
        scheduledService1
      );
      expect(await service.getById(1)).toEqual(scheduledService1);
    });  

    it('should reject when record is not found', async () => {
      jest.spyOn(spyScheduledServiceRepository, 'findOneOrFail').mockRejectedValueOnce(
        new Error()
      );
      await expect(service.getById(1)).rejects.toBeDefined();
    });  
  });
});