import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      import: (await import('eslint-plugin-import')).default, // ✅
    },
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal', // Изменяем на internal для лучшей группировки
              position: 'before',
            },
            {
              pattern: '@/components/header/**', // Специфичный паттерн для header
              group: 'internal',
              position: 'before',
            },
          ],
          'newlines-between': 'always', // Добавляем пустые строки между группами
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          warnOnUnassignedImports: true, // Предупреждает о непопадающих в группы импортах
        },
      ],
    },
  },
];

export default eslintConfig;
