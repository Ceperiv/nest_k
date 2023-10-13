import { Module } from '@nestjs/common';
import { CustomerAssistanceService } from './customer-assistance.service';

@Module({
  providers: [CustomerAssistanceService]
})
export class CustomerAssistanceModule {}
