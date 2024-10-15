import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import commonConfig, { EnvironmentEnum } from './config/common.config';
import githubConfig from './config/github.config';

@Injectable()
export class ApiConfigService {
  constructor(
    @Inject(commonConfig.KEY)
    private cnConfig: ConfigType<typeof commonConfig>,
    @Inject(githubConfig.KEY)
    private ghConfig: ConfigType<typeof githubConfig>,
  ) {}

  getPort(): number {
    return this.cnConfig.port;
  }

  isProd(): boolean {
    return this.cnConfig.env === EnvironmentEnum.PRODUCTION;
  }

  githubClientId(): string {
    return this.ghConfig.clientId;
  }

  githubClientSecret(): string {
    return this.ghConfig.clientSecret;
  }
}
