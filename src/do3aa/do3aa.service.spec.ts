import { Test, TestingModule } from '@nestjs/testing';
import { Do3aaService } from './do3aa.service';

describe('Do3aaService', () => {
  let service: Do3aaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Do3aaService],
    }).compile();

    service = module.get<Do3aaService>(Do3aaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
