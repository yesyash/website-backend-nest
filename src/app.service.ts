import { Injectable } from '@nestjs/common';
import { ApiConfigService } from './api-config.service';

@Injectable()
export class AppService {
  constructor(private readonly apiConfigService: ApiConfigService) {}

  getHello(): string {
    console.log(this.apiConfigService.getPort());
    return 'Hello world!';
  }
}
