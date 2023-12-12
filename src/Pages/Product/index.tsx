import { useParams } from 'react-router-dom'

import Gallery from '../../components/Gallery'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

import { useGetGameQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams()

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: game } = useGetGameQuery(id!)

  if (!game) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system}
          <b>Desenvolvedor:</b> {game.details.developter}
          <b>Editora:</b> {game.details.publisher}
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        defaultCover={game.media.cover}
        name={game.name}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
