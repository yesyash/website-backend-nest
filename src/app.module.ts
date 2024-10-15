import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ApiConfigService } from './api-config.service';
import commonConfig from './config/common.config';
import githubConfig from './config/github.config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [commonConfig, githubConfig],
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'testuser',
      password: 'testpassword',
      database: 'website-backend',
      autoLoadModels: true,
      ssl: false, // TODO: this is only for development, set this to false in prod
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [ApiConfigService],
})
export class AppModule {}
