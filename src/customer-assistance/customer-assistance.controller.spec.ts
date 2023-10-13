import { Test, TestingModule } from '@nestjs/testing';
import { CustomerAssistanceController } from './customer-assistance.controller';

describe('CustomerAssistanceController', () => {
  let controller: CustomerAssistanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerAssistanceController],
    }).compile();

    controller = module.get<CustomerAssistanceController>(CustomerAssistanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
