import { Injectable } from '@nestjs/common';
import { medusa } from '../../medusa-config';
import { IOrderData } from '../types/index';
import { FilterAndSortProducts } from '../utils/FilterAndSortProducts';

@Injectable()
export class MedusaService {
  // получение товаров надо переделать путем создания кастомного endpoint в Medusa поскольку сейчас приходят все товары и сортировка и фильтрация происходят на стороне nextjs
  async getProducts(
    regionId: string,
    sortBy: string = 'title_asc',
    minPrice?: number,
    maxPrice?: number,
    searchParam?: string
  ) {
    try {
      const { products } = await medusa.store.product.list({
        region_id: regionId,
        fields: '*variants.calculated_price',
      });

      const sortedProducts = FilterAndSortProducts(
        products,
        sortBy,
        minPrice,
        maxPrice,
        searchParam
      );
      return sortedProducts;
    } catch (error) {
      throw new Error(`Failed to fetch products by category handle: ${error.message}`);
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

  async getProductByTag(tag: string, regionId: string) {
    try {
      const { products } = await medusa.store.product.list({
        region_id: regionId,
        tag_id: tag,
        fields: '*variants.calculated_price',
        limit: 8,
      });

      return products;
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

  async getProductsByCategory(
    regionId: string,
    handle: string,
    sortBy: string = 'title_asc',
    minPrice?: number,
    maxPrice?: number,
    searchParam?: string
  ) {
    try {
      const categoryRes = await medusa.store.category.list();
      const category = categoryRes.product_categories.find((cat) => cat.handle === handle);

      if (!category) {
        throw new Error(`Category with handle "${handle}" not found`);
      }

      const { products } = await medusa.store.product.list({
        region_id: regionId,
        fields: '*variants.calculated_price',
        category_id: [category.id],
      });

      const sortedProducts = FilterAndSortProducts(
        products,
        sortBy,
        minPrice,
        maxPrice,
        searchParam
      );
      return sortedProducts;
    } catch (error) {
      throw new Error(`Failed to fetch products by category handle: ${error.message}`);
    }
  }

  // создание заказа
  async createOrder(data: IOrderData) {
    try {
      // 1. Проверка входных данных
      if (!data.region_id || !data.items?.length) {
        throw new Error('Invalid order data: region_id or items missing');
      }

      // 1. Создать корзину
      const { cart } = await medusa.store.cart.create({
        region_id: data.region_id,
      });

      // 2. Добавить все товары из items
      for (const item of data.items) {
        try {
          await medusa.store.cart.createLineItem(cart.id, {
            variant_id: item.variant_id,
            quantity: item.quantity,
          });
        } catch (err) {
          throw new Error(`Ошибка добавления товара ${item.variant_id}: ${err.message}`);
        }
      }

      // 3. Обновить контактные данные покупателя
      try {
        await medusa.store.cart.update(cart.id, {
          shipping_address: {
            first_name: data.customer_name,
            phone: data.customer_phone,
            address_1: 'N/A',
            city: 'N/A',
            country_code: 'gb',
            postal_code: '000000',
          },
          billing_address: {
            first_name: data.customer_name,
            phone: data.customer_phone,
          },
        });
      } catch (err) {
        throw new Error(`Ошибка обновления адреса: ${err.message}`);
      }

      // 5. Устновить метод доставки
      try {
        await medusa.store.cart.addShippingMethod(cart.id, {
          option_id: process.env.STORE_OPTION_ID,
        });
      } catch (err) {
        throw new Error(`Ошибка установки метода доставки: ${err.message}`);
      }

      // 5. Инициализировать платежную сессию
      try {
        await medusa.store.payment.initiatePaymentSession(cart, {
          provider_id: 'pp_system_default',
        });
      } catch (err) {
        throw new Error(`Ошибка инициализации платежа: ${err.message}`);
      }

      // 6. Завершить корзину (создать заказ)
      try {
        const order = await medusa.store.cart.complete(cart.id);
        return order;
      } catch (err) {
        throw new Error(`Ошибка завершения заказа: ${err.message}`);
      }
    } catch (err) {
      console.error('❌ Ошибка создания заказа:', err.message);
      throw new Error(`Не удалось создать заказ: ${err.message}`);
    }
  }

  // не используется оставил для образца
  async getProductsSearch(name: string, regionId: string, limit: number = 10, offset: number = 0) {
    try {
      const { products } = await medusa.store.product.list({
        q: name, // Параметр поиска по названию
        region_id: regionId,
        limit,
        offset,
        fields: '*variants.calculated_price',
      });

      return products;
    } catch (error) {
      throw new Error(`Failed to search products by name: ${error.message}`);
    }
  }
}
