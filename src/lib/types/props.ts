import { ReactNode } from 'react';

export type WithChildren = {
  children: ReactNode;
};

export type WithOnChange = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
