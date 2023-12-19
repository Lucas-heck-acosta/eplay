import { Route, Routes } from 'react-router-dom'
import Categories from './Pages/Categories'
import Product from './Pages/Product'
import Home from './Pages/Home'
import Checkout from './Pages/Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas
