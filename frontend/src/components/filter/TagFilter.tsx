'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { JSX } from 'react';

import { PRODUCT_TAGS_NAME } from '@/constants';

import styles from '../../styles/components/filter/tagFilter.module.css';

const TagFilter = (): JSX.Element => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Получаем текущие выбранные теги из URL
  const selectedTags = searchParams.getAll('tag');

  // Обработчик изменения чекбокса
  const handleTagToggle = (tag: string, isChecked: boolean): void => {
    const newParams = new URLSearchParams(searchParams.toString());
    const currentTags = newParams.getAll('tag');

    if (isChecked) {
      // Добавляем тег, если его нет
      if (!currentTags.includes(tag)) {
        newParams.append('tag', tag);
      }
    } else {
      // Удаляем тег
      newParams.delete('tag'); // Удаляем все параметры tag
      currentTags.filter((t) => t !== tag).forEach((t) => newParams.append('tag', t));
    }

    // Обновляем URL без перезагрузки страницы
    router.replace(`${pathname}?${newParams.toString()}`, { scroll: false });
  };

  return (
    <div className="border-[2px] border-solid border-[#e1e1e1] px-[40px] py-[30px] rounded-[15px] max-[1000px]:px-[20px] max-[1000px]:py-[15px]">
      <h3 className="text-[#535353] text-[22px] font-medium [border-bottom:2px_solid_#e1e1e1] pb-[15px] mb-[15px]">
        Фильтр по тегу
      </h3>
      <div className="flex flex-col gap-[6px] max-[900px]:flex-row max-[900px]:gap-[20px]">
        {PRODUCT_TAGS_NAME.map((tag) => (
          <div className={styles.checkboxItem} key={tag}>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                name={tag}
                checked={selectedTags.includes(tag)}
                onChange={(e) => handleTagToggle(tag, e.target.checked)}
              />
              <span>{tag.toUpperCase()}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagFilter;
