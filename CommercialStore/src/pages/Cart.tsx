import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import s from '../style/pages/Cart.module.scss'

export default function Cart() {
  return (

    <Helmet title="Cart">
      <main>
        <section className={s.path}></section>
        <section className={s.products}>
          <div className={s.title}>
            <h5>product details</h5>
            <h5>price</h5>
            <h5>quantity</h5>
            <h5>shipping</h5>
            <h5>subtotal</h5>
            <h5>action</h5>
          </div>
        </section>
        <section className={s.totalPrice}></section>
      </main>
    </Helmet>
  )
}
