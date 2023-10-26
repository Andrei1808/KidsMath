import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home'
import Cart from '../pages/WishList';
import Login from '../pages/Login';
import ProductDetails from '../pages/ProductDetails';
import Shop from '../pages/Shop';
import Signup from '../pages/Signup';


export default function Routers() {
  return <Routes>
    <Route path='/' element={<Navigate to='/home'/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='productDetails' element={<ProductDetails/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='signup' element={<Signup />} />
  </Routes>
}
