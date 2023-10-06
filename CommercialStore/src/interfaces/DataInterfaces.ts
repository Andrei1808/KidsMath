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

export interface helmetInterface{
  title?: string;
  children?: ReactNode | undefined;
}
