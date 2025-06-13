import { Module } from '@nestjs/common';
import { MedusaService } from '../medusa/medusa.service';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  controllers: [OrderController],
  providers: [OrderService, MedusaService],
})
export class OrderModule {}
