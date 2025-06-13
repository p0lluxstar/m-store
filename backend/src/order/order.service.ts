import { Injectable } from '@nestjs/common';
import { MedusaService } from '../medusa/medusa.service';

@Injectable()
export class OrderService {
  async createOrder(data: {
    name: string;
    phone: string;
    items: Array<{ product_id: string; variant_id: string; quantity: number }>;
  }) {
    console.log('data', data)
    // // 1. Создаём корзину
    // const { cart } = await medusa.carts.create();

    // // 2. Добавляем товары
    // for (const item of data.items) {
    //   await medusa.carts.lineItems.create(cart.id, {
    //     variant_id: item.variant_id,
    //     quantity: item.quantity,
    //   });
    // }

    // // 3. Устанавливаем фиктивный адрес (обязателен даже без доставки)
    // await medusa.carts.update(cart.id, {
    //   region_id: 'reg_XXX', // твой ID региона
    //   shipping_address: {
    //     first_name: data.name,
    //     phone: data.phone,
    //     address_1: 'N/A',
    //     city: 'N/A',
    //     country_code: 'ru',
    //     postal_code: '000000',
    //   },
    // });

    // // 4. Устанавливаем метод оплаты
    // await medusa.carts.setPaymentSession(cart.id, {
    //   provider_id: 'manual',
    // });

    // // 5. Завершаем заказ
    // const { order } = await medusa.orders.createFromCart(cart.id);

    // return order;
  }
}
