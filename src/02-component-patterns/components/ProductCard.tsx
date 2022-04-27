import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';

import styles from '../styles/styles.module.css';

import { ProductContextProps, ProductCardsProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
// proveedor de informacion
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardsProps) => {
  const { counter, incressBy } = useProduct();

  return (
    <Provider value={{ counter, incressBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
