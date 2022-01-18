import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap();

/**
 * 1. Set up the models
 * 2. Set up the dtos
 * 3. Set up the validatorGuard
 * 4. Set up the strategies
 */
