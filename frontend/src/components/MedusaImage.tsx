import Image from 'next/image';
import { JSX } from 'react';

interface IProps {
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const MedusaImage = ({ className, src, alt, width, height }: IProps): JSX.Element => {
  const staticPath = src.split('/static/')[1];

  const finalScr = process.env.NEXT_PUBLIC_MEDIA_URL
    ? `${process.env.NEXT_PUBLIC_MEDIA_URL}/static/${staticPath}`
    : src;

  return <Image className={className} src={finalScr} alt={alt} width={width} height={height} />;
};

export default MedusaImage;
