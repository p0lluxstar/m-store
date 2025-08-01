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
    @Query('maxPrice') maxPrice?: string,
    @Query('searchParam') searchParam?: string
  ) {
    return this.medusaService.getProducts(
      process.env.REGION_ID,
      sortBy ?? 'title_asc',
      minPrice ? Number(minPrice) : undefined,
      maxPrice ? Number(maxPrice) : undefined,
      searchParam
    );
  }

  // @Get()
  // async getProductTest() {
  //   return this.medusaService.getProductsTest('reg_01JWRDG8DY2GDMAK48EY1BJ9MF');
  // }

  @Get('search')
  async getProductsSearch(
    @Query('name') name: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string
  ) {
    if (!name) {
      return { error: 'name query parameter is required' };
    }

    return this.medusaService.getProductsSearch(
      name,
      process.env.REGION_ID,
      limit ? parseInt(limit) : 10,
      offset ? parseInt(offset) : 0
    );
  }

  @Get(':id')
  async getProductById(@Param('id') id: string) {
    return this.medusaService.getProductById(id, process.env.REGION_ID);
  }

  @Get('tag/:tag')
  async getProductByTag(@Param('tag') tag: string) {
    return this.medusaService.getProductByTag(tag, process.env.REGION_ID);
  }
}
