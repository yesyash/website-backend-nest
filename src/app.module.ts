import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
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
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'testuser',
      password: 'testpassword',
      database: 'website-backend',
      ssl: false, // TODO: this is only for development, set this to false in prod
      autoLoadEntities: true,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [ApiConfigService],
})
export class AppModule {}
