import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
}

export const ProductBottons = ({ className }: Props) => {
  const { counter, incressBy } = useContext(ProductContext);
  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
      <button className={styles.buttonMinus} onClick={() => incressBy(-1)}>
        -
      </button>

      <div className={styles.countLabel}>{counter}</div>

      <button className={styles.buttonAdd} onClick={() => incressBy(1)}>
        +
      </button>
    </div>
  );
};
