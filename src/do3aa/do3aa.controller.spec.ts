import { Test, TestingModule } from '@nestjs/testing';
import { Do3aaController } from './do3aa.controller';
import { Do3aaService } from './do3aa.service';

describe('Do3aaController', () => {
  let controller: Do3aaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Do3aaController],
      providers: [Do3aaService],
    }).compile();

    controller = module.get<Do3aaController>(Do3aaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
