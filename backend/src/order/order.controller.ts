import { Body, Controller, Post } from '@nestjs/common';
import { MedusaService } from '../medusa/medusa.service';
import { IOrderData } from '../types/index';

@Controller('order')
export class OrderController {
  constructor(private readonly medusaService: MedusaService) {}

  @Post()
  async create(@Body() data: IOrderData) {
    return this.medusaService.createOrder(data);
  }
}
