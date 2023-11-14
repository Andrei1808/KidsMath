import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { useProducts } from '../hooks/useProducts';
import ProductList from '../components/UI/ProductList/ProductList';

export default function Shop() {
  const products = useProducts();
  return (
    <div> <Helmet title={"Shop"}>
<ProductList/>
    </Helmet></div>
  )
}
