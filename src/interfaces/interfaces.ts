import { CSSProperties } from 'react';


export interface onChangeArgs {
  product: Product; 
  count: number;
}

export interface InitialValuesProductCard {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;
  //increaseBy(value: number): void;
  //reset(): void;
}

export interface ProductCardProps {
  product: Product; 
  //children?: ReactElement | ReactElement[];
  children: ( args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
  initialValues?: InitialValuesProductCard; 
}

export interface useProductArgs {
  product: Product;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
  initialValues?: InitialValuesProductCard;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface ShoppingCart {
  [key:string]: ProductInCart;
}

export interface ProductTitleProps {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export interface ProductImageProps {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export interface ProductButtonsProps {
  className?: string;
  style?: CSSProperties;
}

export interface ProductContextProps {
  product: Product;
  counter: number;
  maxCount?: number;
  increaseBy(value: number): void;
}

// interface ProductButtonsProps {
//   counter: number;ZZ
//   increaseBy(value: number): void;
// }

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element,
  Image:   ( Props: ProductImageProps ) => JSX.Element, 
  Title:   ( Props: ProductTitleProps ) => JSX.Element;
  Buttons: ( Props: ProductButtonsProps ) => JSX.Element;
}
