import { ReactNode } from "react";

export interface serverResponse {
  item: {
    id: number;
    price: number;
    title: string;
    description: string;
    img: string;
    brand: string;
  };
}

export interface productInterface {
  id: number;
  price?: number;
  title?: string;
  description?: string;
  img?: string;
  brand?: string;
  isNew?: boolean;
  category?: string;
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
  limited: boolean;
  theme: string;
}
