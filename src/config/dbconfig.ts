import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from 'path';

export default (): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [join(__dirname, '/../**', '*.entity.{ts,js}')],
  migrations: ['src/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations'
  },
  synchronize: true,
  autoLoadEntities: true,
});