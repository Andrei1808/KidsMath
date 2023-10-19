import { ReactNode } from "react";

export interface staticDataInterface {
  id: number;
  title: string;
  description: string;
  offer: string;
  img?: string;
  limited?: boolean;
}

export interface staticDataCardInterface {
  data: {
    id: number;
    title: string;
    description: string;
    offer: string;
    img?: string;
    limited?: boolean;
  };
}

export const heroData = [
  {
    id: 1,
    title: "Low Price",
    description: "High Coziness",
    offer: "UPTO 50% OFF",
    img: "src/assets/images/imagesHome/home-coziness.png",
  },
  {
    id: 2,
    title: "Beyoung Presents",
    description: "Breezy Summer Style",
    offer: "UPTO 50% OFF",
    img: "src/assets/images/imagesHome/home-summer-style.png",
  },
];

export const bigSavingZoneData = [
  {
    id: 1,
    title: "Hawaiian Shirts",
    description: "Dress up in summer vibe",
    offer: "UPTO 50% OFF",
    img: "src/assets/images/imagesHome/hawaiian-shirts.png",
    limited: false,
    theme: "light",
  },
  {
    id: 2,
    title: "Printed T-Shirt",
    description: "New Designs Every Week",
    offer: "UPTO 40% OFF",
    img: "src/assets/images/imagesHome/printed-t-shirts.png",
    limited: true,
    theme: "light",
  },
  {
    id: 3,
    title: "Cargo  Joggers",
    description: "Move with style & comfort",
    offer: "UPTO 50% OFF",
    img: "src/assets/images/imagesHome/joggers.png",
    limited: false,
    theme: "dark",
  },
  {
    id: 4,
    title: "Urban Shirts",
    description: "Live In Confort",
    offer: "FLAT 60% OFF",
    img: "src/assets/images/imagesHome/urban-shirts.png",
    limited: false,
    theme: "dark",
  },
  {
    id: 5,
    title: "Oversized T-Shirts",
    description: "Street Style Icon",
    offer: "FLAT 60% OFF",
    img: "src/assets/images/imagesHome/oversized-shirts.png",
    limited: false,
    theme: "dark",
  },
];
