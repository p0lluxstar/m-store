import { JSX } from 'react';
import { RiShoppingBagLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';

import { toggleVisibility } from '@/store/slices/toggleSlice';

import CartItemsCounter from './CartItemsCounter';

const ShopCartBtn = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleCartButton = (): void => {
    dispatch(toggleVisibility());
  };

  return (
    <div>
      <button
        className="hover:cursor-pointer hover:opacity-90"
        type="button"
        onClick={handleCartButton}
      >
        <i className="text-[26px] hover:opacity-90">
          <RiShoppingBagLine />
        </i>
        <CartItemsCounter />
      </button>
    </div>
  );
};

export default ShopCartBtn;
