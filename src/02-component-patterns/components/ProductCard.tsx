import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';
import noImage from './assets/no-image.jpg';
export const ProductCard = () => {
  const { counter, incressBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <img className={styles.productImg} src='./coffee-mug.png' alt='coffe mug' />
      {/* <img className={styles.productImg} src={noImage} alt='No Image' /> */}

      <span className={styles.productDescription}>Coffe Mug</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => incressBy(-1)}>
          -
        </button>

        <div className={styles.countLabel}>{counter}</div>

        <button className={styles.buttonAdd} onClick={() => incressBy(1)}>
          +
        </button>
      </div>
    </div>
  );
};
