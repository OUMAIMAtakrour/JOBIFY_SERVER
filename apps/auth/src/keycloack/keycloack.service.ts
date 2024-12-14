import { Injectable } from '@nestjs/common';
import { CreateKeycloackDto } from './dto/create-keycloack.dto';
import { UpdateKeycloackDto } from './dto/update-keycloack.dto';

@Injectable()
export class KeycloackService {
  create(createKeycloackDto: CreateKeycloackDto) {
    return 'This action adds a new keycloack';
  }

  findAll() {
    return `This action returns all keycloack`;
  }

  findOne(id: number) {
    return `This action returns a #${id} keycloack`;
  }

  update(id: number, updateKeycloackDto: UpdateKeycloackDto) {
    return `This action updates a #${id} keycloack`;
  }

  remove(id: number) {
    return `This action removes a #${id} keycloack`;
  }
}
