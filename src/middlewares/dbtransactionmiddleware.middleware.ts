import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { EntityManager, getManager } from 'typeorm';

// TODO: Setup transaction ma
@Injectable()
export class DbTransactionMiddleware implements NestMiddleware {

  use(req: Request, res: Response, next: Function) {
    console.log('Request...');
    
    getManager().transaction("REPEATABLE READ", (transactionEntityManager: EntityManager): Promise<undefined> => {
    
      return next();
    });
  }
}
