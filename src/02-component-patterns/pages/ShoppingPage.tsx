import { ProductBottons, ProductCard, ProductImage, ProductTitle } from '../components/index';

const product = {
  id: '1',
  title: 'Coffe Mug - car',
  img: './coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      {/* HIGHGER ORDER COMPONENT (HOC)
        cuando se necesita un componente que recibe un componente como parametro
        ejemplo:
      */}

      <div
        style={{
          display: ' flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title='Jamaica' />
          <ProductCard.Bottons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductBottons />
        </ProductCard>
      </div>
    </div>
  );
};
