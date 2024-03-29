import * as dotenv from 'dotenv';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

dotenv.config();
export const PgConfig = {
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  entities: [],
  migrations: [],
  subscribers: [],
  migrationsTableName: 'typeorm_migrations',
  logging: process.env.NODE_ENV === 'development',
  namingStrategy: new SnakeNamingStrategy(),
};
