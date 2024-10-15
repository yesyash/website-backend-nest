import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/models/user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }
}
