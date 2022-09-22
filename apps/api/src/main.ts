/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const port = config.get('port');
  const globalPrefix = 'api';
  const graphqlPrefix = 'graphql';
  app.setGlobalPrefix(globalPrefix);
  // const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application api is running on: http://localhost:${port}/${globalPrefix}`
  );
  Logger.log(
    `🚀 Application graphql is running on: http://localhost:${port}/${graphqlPrefix}`
  );
  Logger.log(`Running in ${config.get('environment')} mode`);
}

bootstrap();
