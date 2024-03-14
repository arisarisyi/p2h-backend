import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  dotenv.config();

  const port = process.env.MAIN_SERVICE_PORT || 7001;
  const host = process.env.host || 'localhost';

  const app = await NestFactory.create(AppModule);

  app.enableCors();
  const swaggerConfig = new DocumentBuilder()
    .setTitle('KAD P2H')
    .setDescription('P2H Backend')
    .setVersion('1.0')
    .addTag('KAD')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  app.use(cookieParser());

  await app.listen(port, host, () => {
    console.log('[WEB SERVICE]', `${host}:${port}`);
  });
}
bootstrap();
