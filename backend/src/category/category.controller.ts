import { Controller, Get, Query } from '@nestjs/common';
import { MedusaService } from '../medusa/medusa.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly medusaService: MedusaService) {}

  @Get()
  async getProducts() {
    return this.medusaService.getCategories();
  }

  @Get('products')
  async getProductsByCategory(@Query('handle') handle: string) {
    if (!handle) {
      return { error: 'categoryId query parameter is required' };
    }
    return this.medusaService.getProductsByCategoryHandle('reg_01JWRDG8DY2GDMAK48EY1BJ9MF', handle);
  }
}
