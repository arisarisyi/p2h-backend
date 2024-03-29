import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PgConfig } from './postgres.config';
import * as dotenv from 'dotenv';

dotenv.config();

/**
 * TypeORM Service as Class
 * https://betterprogramming.pub/nest-js-project-with-typeorm-and-postgres-ce6b5afac3be
 */
@Injectable()
export class PostgresService implements TypeOrmOptionsFactory {
  public createTypeOrmOptions(): TypeOrmModuleOptions {
    const config: TypeOrmModuleOptions = {
      ...PgConfig,
      type: 'postgres',
      autoLoadEntities: true,
    };

    return {
      ...config,
      synchronize: process.env.NODE_ENV === 'development' ? true : false,
    };
  }
}
