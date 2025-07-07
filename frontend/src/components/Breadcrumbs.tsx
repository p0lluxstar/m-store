'use client';

import Link from 'next/link';
import { JSX, useEffect } from 'react';
import { RiHome9Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store';
import { setBreadcrumbsLinks } from '@/store/slices/breadcrumbsLinksSlice';

interface IProps {
  pageLink: Array<{
    label: string;
    href: string;
  }>;
}

const Breadcrumbs = ({ pageLink }: IProps): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBreadcrumbsLinks([]));
  }, [dispatch, pageLink]);

  const breadcrumbsSusubLinks = useSelector((state: RootState) => state.breadcrumbsLinks.subLinks);
  const totalLinks = pageLink.concat(breadcrumbsSusubLinks);

  return (
    <div className="mb-[10px]">
      <ul className="flex">
        <li className="flex items-center">
          <Link href="/" scroll={false}>
            <RiHome9Line />
          </Link>
        </li>
        {totalLinks.map((link) => {
          return (
            <>
              <span className="ml-[5px] mr-[5px]">/</span>
              <li key={link.label}>
                <Link href={link.href} scroll={false}>
                  {link.label}
                </Link>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
