import { ref, get } from "firebase/database";
import { useState, useEffect } from "react";
import { database } from "../firebase";

export interface productInterface {
  id: number;
  price: number;
  title: string;
  description: string;
  img: string;
  brand: string;
  isNew: boolean;
  category: string;
  totalPrice: number;
  quantity: number;
  size: string;
}

export const useProducts = () => {
  const [products, setProducts] = useState<productInterface[]>([]);

useEffect(() => {
  const fetchData = async () => {
    const productsRef = ref(database, "Items");

    try {
      const snapshot = await get(productsRef);
      const products: productInterface[] = [];

      snapshot.forEach((childSnapshot) => {
        const productData = childSnapshot.val();
        products.push(productData);
      });
      setProducts(products);
    } catch (error) {
      console.error("Error", error);
    }
  };

  fetchData();
}, []);
  return products;
};
