import { Game } from '../../Pages/Home'
import { parseToBRL } from '../../utils'
import Product from '../Product'
import * as S from './styles'

export type Props = {
  id?: string
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ id, background, title, games }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }
    if (game.prices.discount) {
      tags.push(`-${game.prices.discount}%`)
    }
    if (game.prices.current) {
      tags.push(parseToBRL(game.prices.current))
    }
    return tags
  }

  return (
    <S.Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <S.List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                category={game.details.category}
                description={game.description}
                image={game.media.thumbnail}
                infos={getGameTags(game)}
                system={game.details.system}
                title={game.name}
                id={game.id}
              />
            </li>
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList
