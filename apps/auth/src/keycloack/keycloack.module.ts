import { Module } from '@nestjs/common';
import { KeycloackService } from './keycloack.service';
import { KeycloackController } from './keycloack.controller';

@Module({
  controllers: [KeycloackController],
  providers: [KeycloackService],
})
export class KeycloackModule {}
