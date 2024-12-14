import { PartialType } from '@nestjs/mapped-types';
import { CreateKeycloackDto } from './create-keycloack.dto';

export class UpdateKeycloackDto extends PartialType(CreateKeycloackDto) {
  id: number;
}
