import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('users')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get()
  findAll() {
    return this.authService.findAll();
  }
}
