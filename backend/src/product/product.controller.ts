import { Controller, Get, Param } from '@nestjs/common';
import { MedusaService } from '../medusa/medusa.service';

@Controller('products')
export class ProductController {
  constructor(private readonly medusaService: MedusaService) {}

  @Get()
  async getProducts() {
    return this.medusaService.getProducts('reg_01JWRDG8DY2GDMAK48EY1BJ9MF');
  }

  @Get(':id')
  async getProductById(@Param('id') id: string) {
    return this.medusaService.getProductById(id, 'reg_01JWRDG8DY2GDMAK48EY1BJ9MF');
  }
}
