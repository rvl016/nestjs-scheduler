import { validateOrReject, ValidationError } from 'class-validator';
import { exception } from 'console';
import { ScheduledService } from '../entity/scheduledService.entity';

describe('ScheduledService Entity', () => {

  it('should not make a SchduledService without dateStart', async () => {
    const scheduledService = new ScheduledService();
    await expect(() => validateOrReject(scheduledService))
      .rejects
      .toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            property: 'dateStart',
            constraints: {
              isDefined: expect.any(String),
            },
          })
        ])
      );
  });

  it('should not make a SchduledService without dateEnd', async () => {
    const scheduledService = new ScheduledService();
    await expect(() => validateOrReject(scheduledService))
      .rejects
      .toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            property: 'dateEnd',
            constraints: {
              isDefined: expect.any(String),
            },
          })
        ])
      );
  });

  it('should not make a SchduledService without state', async () => {
    const scheduledService = new ScheduledService();
    scheduledService.state = undefined;
    await expect(() => validateOrReject(scheduledService))
      .rejects
      .toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            property: 'state',
            constraints: {
              isEnum: expect.any(String),
            },
          })
        ])
      );
  });

  it('should make a SchduledService only with required and non default fields', async () => {
    const scheduledService = new ScheduledService();
    scheduledService.dateStart = new Date();
    scheduledService.dateEnd = new Date();
    return validateOrReject(scheduledService).then((data) => {
      expect(data).toBeFalsy();  
    })
  });


});