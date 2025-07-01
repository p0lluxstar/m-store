import { JSX } from 'react';

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
            className={`z-1 text-white px-[6px] pt-[0] pb-[3px] rounded-[4px] font-medium ${
              tag.value === 'new' ? 'bg-[#266BF9]' : ''
            } ${tag.value === 'sale' ? 'bg-[#F26400]' : ''}`}
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
