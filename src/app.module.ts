import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { validate } from './env.validation';
import { ApiConfigService } from './api-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate,
      cache: true,
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [ApiConfigService, AppService],
})
export class AppModule {}
