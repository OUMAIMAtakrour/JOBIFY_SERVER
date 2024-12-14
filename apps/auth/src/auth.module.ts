import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
// import { KeycloackModule } from './resource/keycloack/keycloack.module';
// import { KeycloackModule } from './auth/keycloack/keycloack.module';
// import { KeycloackModule } from './keycloack/keycloack.module';

@Module({
  imports: [AuthModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
