import { JSX, useState } from 'react';

import TableCart from '../cart/TableCart';

import OrderSubmit from './OrderSubmit';
import OrderSuccess from './OrderSuccess';

const OrderFlow = (): JSX.Element => {
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  const handleOrderSuccess = (orderId: string): void => {
    setOrderId(orderId);
    setOrderCompleted(true);
  };

  if (orderCompleted && orderId) {
    return <OrderSuccess orderId={orderId} />;
  }

  return (
    <>
      <TableCart />
      <OrderSubmit onOrderSuccess={handleOrderSuccess} />
    </>
  );
};

export default OrderFlow;
