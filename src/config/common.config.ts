import { registerAs } from '@nestjs/config';
import { IsEnum, IsNumber, Min, Max } from 'class-validator';
import { validateEnv } from 'src/utils/validate-env.util';

export enum EnvironmentEnum {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
  STAGING = 'staging',
}

export class CommonConfig {
  @IsEnum(EnvironmentEnum)
  env: EnvironmentEnum;

  @IsNumber()
  @Min(0)
  @Max(65535)
  port: number;
}

export default registerAs('common', () => {
  const config = {
    env: process.env.env,
    port: process.env.port,
  };

  return validateEnv(CommonConfig, config);
});
