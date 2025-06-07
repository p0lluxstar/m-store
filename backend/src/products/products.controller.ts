import { Controller, Get } from '@nestjs/common';
import { MedusaService } from 'src/medusa/medusa.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly medusaService: MedusaService) {}

  @Get()
  async getProducts() {
    return this.medusaService.getProducts('reg_01JWRDG8DY2GDMAK48EY1BJ9MF');
  }
}
