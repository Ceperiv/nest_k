import { Test, TestingModule } from '@nestjs/testing';
import { CustomerAssistanceService } from './customer-assistance.service';

describe('CustomerAssistanceService', () => {
  let service: CustomerAssistanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerAssistanceService],
    }).compile();

    service = module.get<CustomerAssistanceService>(CustomerAssistanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
