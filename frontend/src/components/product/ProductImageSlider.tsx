'use client';

import Image from 'next/image';
import { useState, useEffect, JSX } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface IProductImageSliderProps {
  images: Array<{
    id: string;
    url: string;
  }>;
  initialIndex?: number;
  onClose: () => void;
}

const ProductImageSlider = ({
  images,
  initialIndex = 0,
  onClose,
}: IProductImageSliderProps): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Обработчик нажатия клавиш
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return (): void => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const goToPrev = (): void => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (): void => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 bg-[#292929]/80 z-50 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-20"
      >
        <FaTimes size={24} />
      </button>

      <div className="relative w-full max-w-4xl h-full max-h-[90vh] flex items-center">
        <button
          onClick={goToPrev}
          className="absolute left-4 text-white text-2xl hover:text-gray-300 z-10 p-2"
        >
          <FaChevronLeft size={32} />
        </button>

        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={images[currentIndex].url}
            alt={`Product image ${currentIndex + 1}`}
            fill
            className="object-contain rounded-[15px]"
            priority
          />
        </div>

        <button
          onClick={goToNext}
          className="absolute right-4 text-white text-2xl hover:text-gray-300 z-10 p-2"
        >
          <FaChevronRight size={32} />
        </button>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-gray-500 hover:bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageSlider;
