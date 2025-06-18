'use client';

import { JSX } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/store';

export function StoreProviders({ children }: { children: React.ReactNode }): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}
