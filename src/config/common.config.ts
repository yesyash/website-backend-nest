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
  ENV: EnvironmentEnum;

  @IsNumber()
  @Min(0)
  @Max(65535)
  PORT: number;
}

export default registerAs('common', () => {
  const config = {
    ENV: process.env.ENV,
    PORT: process.env.PORT,
  };

  return validateEnv(CommonConfig, config);
});
