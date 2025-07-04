'use client';

import Image from 'next/image';
import { JSX, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import { IContactForm } from '@/types';

import styles from '../../styles/components/contactForm.module.scss';
import Checkmark from '../Checkmark';
import Loader from '../Loader';


const ContactForm = (): JSX.Element => {
  const [isLoding, setIsLoading] = useState(false);
  const [isCheckmark, setIsCheckmark] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Храним ID таймера

  const onSubmit = (): void => {
    setIsCheckmark(false);
    setIsLoading(true);

    // Очищаем предыдущий таймаут (если был)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Устанавливаем новый таймаут
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
      setIsCheckmark(true);
      reset();
    }, 2000);
  };

  // Очистка при размонтировании компонента
  useEffect(() => {
    return (): void => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContactForm>();

  console.log(styles);

  return (
    <div className="flex gap-[20px]">
      <div className="w-[75%] [box-shadow:-4px_0px_20px_0px_rgba(0,_0,_0,_0.1)] p-[60px] rounded-[15px]">
        <div>
          <h2 className="font-medium text-[34px] text-black leading-[1.2] mb-[40px]">
            Мы здесь! <br />
            Пожалуйста, отправьте сообщение
          </h2>
        </div>
        <div>
          <form className="flex flex-col gap-[30px]">
            <div className="flex gap-[30px]">
              <div className="relative w-[50%]">
                <input
                  className={`w-[100%] px-[24px] py-[8px] border-[1px] border-solid focus:bg-[#f5f5f5] focus-visible:outline-none ${
                    errors.name ? 'border-red-500' : 'border-[#d7d7d7]'
                  }`}
                  id="name"
                  placeholder="Ваше имя*"
                  {...register('name', {
                    required: 'Введите ваше имя',
                  })}
                />
                {errors.name && (
                  <p className="absolute bottom-[-16px] text-red-500 text-[12px]">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="relative w-[50%]">
                <input
                  className={`w-[100%] px-[24px] py-[8px] border-[1px] border-solid focus:bg-[#f5f5f5] focus-visible:outline-none ${
                    errors.email ? 'border-red-500' : 'border-[#d7d7d7]'
                  }`}
                  id="email"
                  placeholder="Ваш email*"
                  {...register('email', {
                    required: 'Введите ваш email',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Некорректный email',
                    },
                  })}
                />
                {errors.email && (
                  <p className="absolute bottom-[-16px] text-red-500 text-[12px]">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <input
              className="border-[1px] px-[24px] py-[8px] border-solid border-[#d7d7d7] focus:bg-[#f5f5f5] focus-visible:outline-none"
              id="subject"
              placeholder="Тема сообщения"
              {...register('subject')}
            />
            <div className="relative">
              <textarea
                className={`w-[100%] border-[1px] px-[24px] py-[8px] border-solid border-[#d7d7d7] resize-none focus:bg-[#f5f5f5] focus-visible:outline-none ${
                  errors.message ? 'border-red-500' : 'border-[#d7d7d7]'
                }`}
                rows={10}
                id="message"
                placeholder="Сообщение*"
                {...register('message', {
                  required: 'Введите текст сообщения',
                })}
              />
              {errors.message && (
                <p className="absolute bottom-[-16px] text-red-500 text-[12px]">
                  {errors.message.message}
                </p>
              )}
            </div>
          </form>
        </div>
        <div className="flex">
          <button
            className="flex justify-center items-center bg-[#eb3e32] text-white w-[180px] h-[66px] text-[24px] font-bold mt-[60px] cursor-pointer hover:opacity-90"
            onClick={!isLoding ? handleSubmit(onSubmit) : undefined}
          >
            {isLoding && <Loader backgroundColor="#ffffff" />}
            {isCheckmark && <Checkmark checkmarkColor="#ffffff" />}
            {!isLoding && !isCheckmark && 'Отправить'}
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between w-[25%]">
        <div className={styles.singleСontact}>
          <div className="mb-[20px]">
            <Image src={'/img/webp/home.webp'} alt="" width={70} height={70} />
          </div>
          <div className="text-center">
            <h4 className="text-[28px] font-medium pb-[15px] text-[#2e2e2e]">Адрес</h4>
            <p className="font-medium  text-[#2e2e2e]">г. Москва, ул. Бауманская</p>
          </div>
        </div>
        <div className={styles.singleСontact}>
          <div className="mb-[20px]">
            <Image src={'/img/webp/phone.webp'} alt="" width={70} height={70} />
          </div>
          <div className="text-center">
            <h4 className="text-[28px] font-medium pb-[15px] text-[#2e2e2e]">Телефон</h4>
            <p className="font-medium  text-[#2e2e2e]">+00 123 456 789</p>
          </div>
        </div>
        <div className={styles.singleСontact}>
          <div className="mb-[20px]">
            <Image src={'/img/webp/email.webp'} alt="" width={70} height={70} />
          </div>
          <div className="text-center">
            <h4 className="text-[28px] font-medium pb-[15px] text-[#2e2e2e]">Email / WEB</h4>
            <p className="font-medium  text-[#2e2e2e]">demo@example.com www.example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
