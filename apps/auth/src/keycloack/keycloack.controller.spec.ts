import { Test, TestingModule } from '@nestjs/testing';
import { KeycloackController } from './keycloack.controller';
import { KeycloackService } from './keycloack.service';

describe('KeycloackController', () => {
  let controller: KeycloackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KeycloackController],
      providers: [KeycloackService],
    }).compile();

    controller = module.get<KeycloackController>(KeycloackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
