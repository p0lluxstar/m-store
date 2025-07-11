import { JSX } from 'react';
import { RiShoppingBagLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';

import { toggleVisibility } from '@/store/slices/toggleAsideCartSlice';

import CartItemsCounter from './CartItemsCounter';

const HeaderCartBtn = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleCartButton = (): void => {
    dispatch(toggleVisibility());
  };

  return (
    <div className='relative'>
      <button
        className="hover:cursor-pointer hover:opacity-90"
        type="button"
        onClick={handleCartButton}
        title="Открыть корзину"
      >
        <i className="text-[32px] hover:opacity-90">
          <RiShoppingBagLine />
        </i>
        <CartItemsCounter />
      </button>
    </div>
  );
};

export default HeaderCartBtn;
