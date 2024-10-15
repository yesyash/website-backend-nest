import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiConfigService } from './api-config.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import githubConfig from './config/github.config';
import commonConfig from './config/common.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [commonConfig, githubConfig],
    }),
  ],
  controllers: [AppController],
  providers: [ApiConfigService, AppService],
})
export class AppModule {}
