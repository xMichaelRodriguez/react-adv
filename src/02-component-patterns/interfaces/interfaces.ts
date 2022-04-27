import { ReactElement } from 'react';

export interface ProductCardsProps {
  children?: ReactElement | ReactElement[];
  product: Product;
}
export interface Product {
  id: string;
  title: string;
  img?: string;
}
export interface ProductContextProps {
  counter: number;
  incressBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardsProps): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Bottons: () => JSX.Element;
}
