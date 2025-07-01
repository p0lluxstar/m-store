import { Injectable } from '@nestjs/common';
import { medusa } from '../../medusa-config';
import { FilterAndSortProducts } from 'src/utils/FilterAndSortProducts';

interface CartItem {
  variant_id: string;
  quantity: number;
}

interface OrderData {
  items: CartItem[];
  customer_name: string;
  customer_phone: string;
  region_id: string;
}

@Injectable()
export class MedusaService {
  // async getProducts(regionId: string) {
  //   medusa.store.category.retrieve;
  //   try {
  //     const { products } = await medusa.store.product.list({
  //       region_id: regionId,
  //       fields: '*variants.calculated_price',
  //     });

  //     return products;
  //   } catch (error) {
  //     throw new Error(`Failed to fetch products: ${error.message}`);
  //   }
  // }

  // async getProductsTest(regionId: string) {
  //   medusa.store.category.retrieve;
  //   try {
  //     const products = await medusa.store.product.retrieve('prod_01JWRDG8SE0KQ48SAPJPS8R75Y', {
  //       fields: 'id,category',
  //     });

  //     medusa.store.product.retrieve('prod_01JWRDG8SE0KQ48SAPJPS8R75Y').then(({ product }) => {
  //       // product.categories — массив категорий, к которым относится продукт
  //       console.log(product.categories);
  //     });

  //     return products;
  //   } catch (error) {
  //     throw new Error(`Failed to fetch products: ${error.message}`);
  //   }
  // }

  async getProducts(
    regionId: string,
    sortBy: string = 'title_asc',
    minPrice?: number,
    maxPrice?: number
  ) {
    try {
      const { products } = await medusa.store.product.list({
        region_id: regionId,
        fields: '*variants.calculated_price',
      });

      const sortedProducts = FilterAndSortProducts(products, sortBy, minPrice, maxPrice);
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
    maxPrice?: number
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

      const sortedProducts = FilterAndSortProducts(products, sortBy, minPrice, maxPrice);
      return sortedProducts;
    } catch (error) {
      throw new Error(`Failed to fetch products by category handle: ${error.message}`);
    }
  }

  // создание заказа
  async createOrder(data: OrderData) {
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
          option_id: 'so_01JYHRVXE94YZ435P9SMAEQXCE',
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
}
