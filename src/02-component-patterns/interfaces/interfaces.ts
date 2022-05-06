import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as TitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductBottonsProps } from "../components/ProductBottons";

export interface Product {
  id: string;
  img?: string;
  title: string;
}
export interface ProductContextProps {
  product: Product;
  incressBy: (value: number) => void;
  counter: number;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Bottons: (Props: ProductBottonsProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Title: (Props: TitleProps) => JSX.Element;
}
