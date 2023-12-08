import { Route, Routes } from 'react-router-dom'
import Categories from './Pages/Categories'
import Product from './Pages/Product'
import Home from './Pages/Home'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
  </Routes>
)

export default Rotas
