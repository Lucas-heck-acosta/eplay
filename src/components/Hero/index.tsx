import { Game } from '../../Pages/Home'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'
import { formataPreco } from '../ProductsList'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  game: Game
}
const Hero = ({ game }: Props) => {
  const dispath = useDispatch()

  const addToCart = () => {
    dispath(add(game))
    dispath(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>{formataPreco(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>Por {formataPreco(game.prices.current)}</>
            )}
          </p>
          {game.prices.current && (
            <Button
              variant
              type="button"
              title="Clique aqui para adicionar este jogo ao carrinho"
              onclick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
