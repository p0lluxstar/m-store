import { JSX } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const InfoTopItems = (): JSX.Element => {
  return (
    <>
      <ul className="flex gap-2.5 max-[900px]:flex max-[900px]:flex-col justify-center items-center">
        <li className="flex items-center pr-[15px] relative custom-before before:!top-[4px] max-[900px]:before:hidden">
          <i className="text-[var(--theme-color)] pr-[10px]">
            <FaPhoneAlt />
          </i>
          <a href="tel://0123456789">+00 123 456 789</a>
        </li>
        <li className="flex items-center">
          <i className="text-[var(--theme-color)] pr-[10px] text-xl">
            <MdEmail />
          </i>
          <a href="mailto://demo@example.com">demo@example.com</a>
        </li>
      </ul>
    </>
  );
};

export default InfoTopItems;
