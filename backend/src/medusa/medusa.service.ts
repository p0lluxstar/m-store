import { Injectable } from '@nestjs/common';
import { medusa } from '../../medusa-config';

@Injectable()
export class MedusaService {
  async getProducts(regionId: string) {
    try {
      const { products } = await medusa.store.product.list({
        region_id: regionId,
        fields: '*variants.calculated_price',
      });

      return products;
    } catch (error) {
      throw new Error(`Failed to fetch products: ${error.message}`);
    }
  }

  async getProductById(productId: string, regionId: string) {
    try {
      const { product } = await medusa.store.product.retrieve(productId, {
        region_id: regionId,
        fields: '*variants.calculated_price',
      });

      return product;
    } catch (error) {
      throw new Error(`Failed to fetch products: ${error.message}`);
    }
  }

  async getCategories() {
    try {
      const { product_categories } = await medusa.store.category.list();

      return product_categories;
    } catch (error) {
      throw new Error(`Failed to fetch product_categories: ${error.message}`);
    }
  }

  async getProductsByCategoryHandle(regionId: string, handle: string) {
    try {
      // 1. находим категорию по handle
      const categoryRes = await medusa.store.category.list();
      const category = categoryRes.product_categories.find((cat) => cat.handle === handle);

      if (!category) {
        throw new Error(`Category with handle "${handle}" not found`);
      }

      // 2. Получаем товары по category_id
      const { products } = await medusa.store.product.list({
        region_id: regionId,
        fields: '*variants.calculated_price',
        category_id: [category.id],
      });

      return products;
    } catch (error) {
      throw new Error(`Failed to fetch products by category handle: ${error.message}`);
    }
  }
}
