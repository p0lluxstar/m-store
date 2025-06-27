import Link from 'next/link';
import { JSX } from 'react';

interface IEmptyStateProps {
  title: string;
  subtitle: string;
  linkText: string;
  linkUrl: string;
}

const EmptyState = ({ title, subtitle, linkText, linkUrl }: IEmptyStateProps): JSX.Element => {
  return (
    <div className={`flex flex-col justify-center w-full items-center mb-[60px]`}>
      <div className="mb-[10px] text-center text-[18px]">
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
      <Link
        href={linkUrl}
        className="flex justify-center items-center px-[20px] bg-[#333131] h-[50px] text-white text-[18px] font-medium cursor-pointer hover:opacity-90"
      >
        {linkText}
      </Link>
    </div>
  );
};

export default EmptyState;
