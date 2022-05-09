import { useProduct } from "../hooks/useProduct";
import { createContext, ReactElement } from "react";

import styles from "../styles/styles.module.css";

import { Product, ProductContextProps } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
// proveedor de informacion
const { Provider } = ProductContext;

export interface Props {
  children?: ReactElement | ReactElement[];
  className?: string;
  product: Product;
  style?: React.CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, incressBy } = useProduct();

  return (
    <Provider value={{ counter, incressBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
