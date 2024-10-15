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
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  };

  return validateEnv(GithubConfig, config);
});
