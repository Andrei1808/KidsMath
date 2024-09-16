export interface staticDataInterface{
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







