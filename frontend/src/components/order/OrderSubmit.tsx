'use client';

import { JSX } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { useCreateOrder } from '@/hooks/useCreateOrder';
import { RootState } from '@/store';
import { clearCart } from '@/store/slices/cartItemsSlice';
import { IUserFormCart } from '@/types';
import { useTotalCartItems } from '@/utils/totalCartItems';

import Loader from '../Loader';

interface IOrderSubmitProps {
  onOrderSuccess: (orderId: string) => void;
}

const OrderSubmit = ({ onOrderSuccess }: IOrderSubmitProps): JSX.Element | null => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserFormCart>();

  const cartItems = useSelector((state: RootState) => state.cartItems.items);
  const dispatch = useDispatch();

  const getTotalPrice = (): number =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const totalCartItems = useTotalCartItems();
  const { createOrder, isLoading, error } = useCreateOrder();

  const onSubmit = async (data: IUserFormCart): Promise<void> => {
    try {
      const result = await createOrder(data.name, data.phone);

      if (result) {
        dispatch(clearCart());
        const shortOrderId = result.order.id.slice(-6);
        onOrderSuccess(shortOrderId);
      }

      console.log('Заказ создан:', result);
      // Перенаправление или очистка корзины
    } catch (error) {
      console.log(error);
    }
  };

  if (cartItems.length === 0) return null;

  return (
    <div className="flex mb-[60px] max-[900px]:flex-col">
      <form className="flex w-[66.66%] max-[900px]:w-[100%] max-[900px]:mb-[30px] max-[700px]:flex-col">
        <div className="w-[50%] pr-[50px] max-[700px]:w-[100%] max-[700px]:p-[0px] max-[700px]:mb-[30px]">
          <h4 className="text-[#000] text-[20px] font-medium mb-[15px]">Данные покупателя</h4>
          <div>
            <input
              id="name"
              {...register('name')}
              className="border-[1px] border-solid border-[#e8e8e8] p-2 w-full mb-[20px]"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>
          <div>
            <input
              id="email"
              {...register('email', {
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Некорректный email',
                },
              })}
              className="border-[1px] border-solid border-[#e8e8e8] p-2 w-full mb-[20px]"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div>
            <input
              id="phone"
              type="tel"
              {...register('phone', {
                required: 'Введите номер телефона',
                pattern: {
                  value: /^\+?[0-9\s\-\(\)]{10,}$/i,
                  message: 'Некорректный номер телефона',
                },
                minLength: {
                  value: 10,
                  message: 'Номер должен содержать минимум 10 цифр',
                },
              })}
              className="border-[1px] border-solid border-[#e8e8e8] p-2 w-full"
              placeholder="+7 (XXX) XXX-XX-XX"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>
        </div>
        <div className="w-[50%] pr-[50px] max-[900px]:p-[0px] max-[700px]:w-[100%]">
          <h4 className="text-[#000] text-[20px] font-medium mb-[15px]">Комментарий к заказу</h4>
          <textarea
            id="comment"
            {...register('comment')}
            className="border-[1px] border-solid border-[#e8e8e8] p-2 w-full min-h-[100px] resize-none"
            placeholder="Дополнительная информация..."
          />
        </div>
      </form>
      <div className="w-[33.33%] max-[900px]:w-[100%]">
        <h4 className="text-[#000] text-[20px] font-medium mb-[15px]">Итого в корзине</h4>
        <div className="flex flex-col gap-[20px] p-[30px] bg-[#f7f7f7]">
          <div className="flex justify-between text-[18px] font-medium">
            <span>Количество товаров:</span>
            <span className="ml-[5px] text-[var(--theme-color)] font-bold">
              {totalCartItems} шт.
            </span>
          </div>
          <div className="flex justify-between text-[18px] font-medium">
            <span>Итоговая сумма:</span>
            <span className="ml-[5px] text-[var(--theme-color)] font-bold">
              {getTotalPrice().toFixed(2)}₽
            </span>
          </div>
        </div>
        <button
          onClick={handleSubmit(onSubmit)}
          className="bg-[#333131] w-full h-[50px] text-white text-[18px] font-medium cursor-pointer hover:opacity-90"
        >
          {isLoading ? <Loader backgroundColor="#ffffff" /> : <span>Оформить заказ</span>}
        </button>
        {error && <p className="text-[red] text-center">Ошбика при отправке заказа</p>}
      </div>
    </div>
  );
};

export default OrderSubmit;
