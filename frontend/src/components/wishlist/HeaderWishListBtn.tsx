import Link from 'next/link';
import { JSX } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';

const HeaderWishListBtn = (): JSX.Element => {
  const wishListItems = useSelector((state: RootState) => state.wishlistItems.items);
  const hasItems = wishListItems.length > 0;
  
  return (
    <div className="relative">
      <Link className="hover:opacity-90" href="/wishlist">
        <i className="text-[30px]">
          <FaRegHeart />
        </i>
        {hasItems && (
          <div className="flex justify-center items-center absolute top-[-2px] right-[-8px] p-[3px] bg-[var(--theme-color)] w-[21px] h-[21px] text-white rounded-[50%] text-[14px] font-semibold">
            <span>{wishListItems.length}</span>
          </div>
        )}
      </Link>
    </div>
  );
};

export default HeaderWishListBtn;
