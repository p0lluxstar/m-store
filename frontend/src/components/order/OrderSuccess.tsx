import Link from 'next/link';
import { JSX } from 'react';
import { BsBagCheck } from 'react-icons/bs';

interface IProps {
  orderId: string;
}

const OrderSuccess = ({ orderId }: IProps): JSX.Element => {
  return (
    <section className="text-center max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div className="mb-2">
        <i className="text-[60px] text-[var(--theme-color)] inline-block">
          <BsBagCheck />
        </i>
      </div>
      <h1 className="text-2xl font-bold mb-4">Спасибо!</h1>
      <div className="space-y-4 mb-6">
        <p className="text-gray-600">
          Заказ передан в отдел продаж. Ожидайте звонка от менеджера в ближайшее время для
          подтверждения деталей.
        </p>
        <div className="mb-[10px]">
          <p className="text-sm text-gray-500">Номер заказа</p>
          <p className="text-lg font-mono font-semibold">{orderId}</p>
        </div>
      </div>
      <Link
        href="/catalog"
        className="p-[10px] h-[50px] bg-[#333131] text-[18px] text-white font-medium  hover:opacity-90 transition-opacity"
      >
        Продолжить покупки
      </Link>
    </section>
  );
};

export default OrderSuccess;
