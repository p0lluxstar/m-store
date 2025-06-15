import { Controller, Post, Body } from '@nestjs/common';
import { MedusaService } from 'src/medusa/medusa.service';

@Controller('order')
export class OrderController {
  constructor(private readonly medusaService: MedusaService) {}

  @Post()
  async create(@Body() data: any) {
    return this.medusaService.createOrder(data);
  }
}
