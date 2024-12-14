import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KeycloackService } from './keycloack.service';
import { CreateKeycloackDto } from './dto/create-keycloack.dto';
import { UpdateKeycloackDto } from './dto/update-keycloack.dto';
import { Public, Roles } from 'nest-keycloak-connect';
@Controller()
export class KeycloackController {
  constructor(private readonly keycloackService: KeycloackService) {}

  @MessagePattern('createKeycloack')
  create(@Payload() createKeycloackDto: CreateKeycloackDto) {
    return this.keycloackService.create(createKeycloackDto);
  }

  @MessagePattern('findAllKeycloack')
  findAll() {
    return this.keycloackService.findAll();
  }

  @MessagePattern('findOneKeycloack')
  findOne(@Payload() id: number) {
    return this.keycloackService.findOne(id);
  }

  @MessagePattern('updateKeycloack')
  update(@Payload() updateKeycloackDto: UpdateKeycloackDto) {
    return this.keycloackService.update(updateKeycloackDto.id, updateKeycloackDto);
  }

  @MessagePattern('removeKeycloack')
  remove(@Payload() id: number) {
    return this.keycloackService.remove(id);
  }
}
