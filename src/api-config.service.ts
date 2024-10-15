import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvironmentEnum, EnvironmentVariables } from './env.validation';

@Injectable()
export class ApiConfigService {
  constructor(
    private configService: ConfigService<EnvironmentVariables, true>,
  ) {}

  getPort(): number {
    return this.configService.get('PORT');
  }

  isProd(): boolean {
    return this.configService.get('ENV') === EnvironmentEnum.PRODUCTION;
  }
}
