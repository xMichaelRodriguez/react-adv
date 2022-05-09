import { ProductBottons, ProductCard, ProductImage, ProductTitle } from "../components/index";

import "../styles/custom-styles.css";

const product = {
  id: "1",
  img: "./coffee-mug.png",
  title: "Coffe Mug - car",
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
          display: " flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard className="bg-dark text-white" product={product}>
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title title="Jamaica" className="text-bold" />
          <ProductCard.Bottons className="custom-bottons" />
        </ProductCard>

        <ProductCard className="bg-dark text-white" product={product} 
        
        >
          <ProductImage className="custom-image"  style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}/>
          <ProductTitle className="text-bold" />
          <ProductBottons className="custom-bottons" />
        </ProductCard>

        <ProductCard
          className="bg-dark text-white"
          product={product}
          style={{
            backgroundColor: "#70D1F8",
          }}
        >
          <ProductImage style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }} />
          <ProductTitle className="text-bold" style={{ fontWeight: "bold" }} />
          <ProductBottons
            className="custom-bottons"
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
