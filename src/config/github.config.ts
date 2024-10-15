import { registerAs } from '@nestjs/config';
import { IsNotEmpty, IsString } from 'class-validator';
import { validateEnv } from 'src/utils/validate-env.util';

export class GithubConfig {
  @IsNotEmpty()
  @IsString()
  clientId: string;

  @IsNotEmpty()
  @IsString()
  clientSecret: string;
}

export default registerAs('github', () => {
  const config = {
    clientId: process.env.github_clientId,
    clientSecret: process.env.github_clientSecret,
  };

  return validateEnv(GithubConfig, config);
});
