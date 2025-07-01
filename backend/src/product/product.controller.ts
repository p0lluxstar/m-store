import { Controller, Get, Param, Query } from '@nestjs/common';
import { MedusaService } from '../medusa/medusa.service';

@Controller('products')
export class ProductController {
  constructor(private readonly medusaService: MedusaService) {}

  // @Get()
  // async getProducts() {
  //   return this.medusaService.getProducts('reg_01JWRDG8DY2GDMAK48EY1BJ9MF');
  // }

  @Get()
  async getProducts(
    @Query('sortBy') sortBy?: string,
    @Query('minPrice') minPrice?: string,
    @Query('maxPrice') maxPrice?: string
  ) {
    return this.medusaService.getProducts(
      'reg_01JWRDG8DY2GDMAK48EY1BJ9MF',
      sortBy ?? 'title_asc',
      minPrice ? Number(minPrice) : undefined,
      maxPrice ? Number(maxPrice) : undefined
    );
  }

  // @Get()
  // async getProductTest() {
  //   return this.medusaService.getProductsTest('reg_01JWRDG8DY2GDMAK48EY1BJ9MF');
  // }

  @Get(':id')
  async getProductById(@Param('id') id: string) {
    return this.medusaService.getProductById(id, 'reg_01JWRDG8DY2GDMAK48EY1BJ9MF');
  }
}
