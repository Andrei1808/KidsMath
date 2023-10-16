import { ref, get } from "firebase/database";
import { useState, useEffect } from "react";
import { productInterface } from "../interfaces/DataInterfaces";
import { database } from "../firebase";

export const useProducts = () => {
    const [products, setProducts] = useState<productInterface[]>([]);
    useEffect(() => {
      const productsRef = ref(database, "Items");
    
      get(productsRef)
        .then((snapshot) => {
          const products: productInterface[] = [];
          snapshot.forEach((childSnapshot) => {
            const productData = childSnapshot.val();
            products.push(productData);
          });
    
          setProducts(products);
        })
        .catch((error) => {
          console.error('Error', error);
        });
    }, []);
    return products;
    };