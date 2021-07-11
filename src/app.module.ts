import { APP_FILTER } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { SchedulesModule } from './modules/schedules/schedules.module';
import AdminPlugin from './admin/adminPlugin';
import { ConfigModule, ConfigService } from '@nestjs/config';
import ormconfig from './config/dbconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Database, Resource } from '@admin-bro/typeorm';
import AdminBro from 'admin-bro';
import { EntityNotFoundFilter } from './exception-filters/entityNotFoundFilter';
import { join } from 'path';

AdminBro.registerAdapter({ Database, Resource });

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: ormconfig,
    }),
    AdminPlugin,
    SchedulesModule,
  ],
  controllers: [
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: EntityNotFoundFilter,
    },
  ],
})
export class AppModule { }
