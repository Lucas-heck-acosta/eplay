import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import * as S from './styles'
import Tag from '../Tag'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { getTotalPrice, parseToBRL } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispath = useDispatch()

  const closeCart = () => {
    dispath(close())
  }
  const removeItem = (id: number) => {
    dispath(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{parseToBRL(item.prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
        <S.Prices>
          Total de {parseToBRL(getTotalPrice(items))}{' '}
          <span>Em até 6x sem juros</span>
        </S.Prices>
        <Button
          title="Clique aqui para continuar com a compra"
          type="button"
          onclick={goToCheckout}
        >
          Continuar com a compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}
export default Cart
