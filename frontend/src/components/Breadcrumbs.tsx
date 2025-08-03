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

  const breadcrumbsSubLinks = useSelector((state: RootState) => state.breadcrumbsLinks.subLinks);
  const totalLinks = pageLink.concat(breadcrumbsSubLinks);

  return (
    <div className="mb-[10px]">
      <ul className="flex">
        <li className="flex items-center">
          <Link href="/" scroll={false} className="hover:opacity-80">
            <RiHome9Line />
          </Link>
        </li>
        {totalLinks.map((link, index) => (
          <li key={`${link.href}-${index}`} className="flex items-center">
            <span className="mx-1">/</span>
            <Link href={link.href} scroll={false} className="hover:opacity-80">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
