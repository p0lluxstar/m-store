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
  async getProductsByCategory(
    @Query('handle') handle: string,
    @Query('sortBy') sortBy?: string,
    @Query('minPrice') minPrice?: string,
    @Query('maxPrice') maxPrice?: string
  ) {
    if (!handle) {
      return { error: 'categoryId query parameter is required' };
    }

    return this.medusaService.getProductsByCategory(
      'reg_01JWRDG8DY2GDMAK48EY1BJ9MF',
      handle,
      sortBy ?? 'title_asc',
      minPrice ? Number(minPrice) : undefined,
      maxPrice ? Number(maxPrice) : undefined
    );
  }
}
