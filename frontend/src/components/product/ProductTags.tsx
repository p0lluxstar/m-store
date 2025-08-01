import { JSX } from 'react';

import { PRODUCT_TAGS } from '@/constants';

interface IProps {
  tags: Array<{
    value: string;
  }>;
}

const ProductTags = ({ tags }: IProps): JSX.Element => {
  return (
    <>
      {tags.map((tag) => {
        return (
          <span
            className={`z-1 text-center text-white w-[40px] px-[6px] pt-[0] pb-[3px] rounded-[4px] font-medium ${
              tag.value === PRODUCT_TAGS.NEW.value ? 'bg-[#266BF9]' : ''
            } ${tag.value === PRODUCT_TAGS.SALE.value ? 'bg-[#f21c00]' : ''} ${tag.value === PRODUCT_TAGS.HIT.value ? 'bg-[#F26400]' : ''}`}
            key={tag.value}
          >
            {tag.value}
          </span>
        );
      })}
    </>
  );
};

export default ProductTags;
