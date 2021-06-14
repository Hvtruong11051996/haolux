import React from 'react'
import Banner from '../../components/Banner'
import Service from './components/Service'
import Sale from './components/Sale'
import Promo from './components/Promo'
import ProductSale from './components/ProductSale'
import ProductNew from './components/ProductNew'
import { useSelector } from 'react-redux'
const HomePage = () => {
  const product = useSelector(state => state.product)
  return (
    <div className="content">
      <Banner />
      <Service />
      <ProductSale productList={product.saleProducts} />
      <Sale />
      <ProductNew productList={product.newProducts} />
      <Promo />
    </div>
  )
}

export default HomePage
