'use client';

import { createContext, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';

import { ContextProviderProps } from '@/types/context';

export type Metrica = 'kilometers' | 'lunar';

interface MetricaContextProps {
  metrica: Metrica;
  setMetrica: Dispatch<SetStateAction<Metrica>>;
}

export const MetricaContext = createContext<MetricaContextProps>({} as MetricaContextProps);

export const MetricaProvider = ({ children }: ContextProviderProps) => {
  const [metrica, setMetrica] = useState<Metrica>('kilometers');

  return (
    <MetricaContext.Provider value={{ metrica, setMetrica }}>{children}</MetricaContext.Provider>
  );
};
