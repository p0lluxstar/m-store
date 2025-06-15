import { Module } from '@nestjs/common';
import { MedusaService } from '../medusa/medusa.service';
import { OrderController } from './order.controller';

@Module({
  controllers: [OrderController],
  providers: [MedusaService],
})
export class OrderModule {}
