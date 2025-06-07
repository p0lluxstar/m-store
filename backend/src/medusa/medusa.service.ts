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
}
