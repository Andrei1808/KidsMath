import { ReactNode } from "react";


export interface productInterface {
  id: number;
  price: number;
  title: string;
  description: string;
  img: string;
  brand: string;
  isNew: boolean;
  category: string;
}

export interface helmetInterface {
  title?: string;
  children?: ReactNode | undefined;
}

export interface cardsInterface{
  id: number;
  price?: number;
  title?: string;
  description?: string;
  img?: string;
  offer?: string;
  limited?: boolean;
  theme?: string;
  contentPosition?: string;
}

export interface staticDataInterface {
  id: number;
  title: string;
  description?: string;
  offer?: string;
  img?: string;
  limited?: boolean;
}

export interface staticDataCardInterface {
  data: {
    id: number;
    title: string;
    description?: string;
    offer?: string;
    img: string;
    limited?: boolean;
  };
}


export interface wishListProduct {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

export interface wishListState {
  wishListItems: wishListProduct[];
  totalAmount: number;
  totalQuantity: number;
}

export interface CarouselProps {
  products: productInterface[];
}

export interface ProductCardsProps {
  item: wishListProduct;
}

export interface ItemProps{
  item: productInterface;
}