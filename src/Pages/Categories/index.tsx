import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'

const Categories = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((resp) => resp.json())
      .then((resp) => setGamesAcao(resp))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((resp) => resp.json())
      .then((resp) => setGamesEsportes(resp))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((resp) => resp.json())
      .then((resp) => setGamesSimulacao(resp))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((resp) => resp.json())
      .then((resp) => setGamesLuta(resp))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((resp) => resp.json())
      .then((resp) => setGamesRPG(resp))
  }, [])
  return (
    <>
      <ProductsList games={gamesAcao} title="Ação" background="gray" />
      <ProductsList games={gamesEsportes} title="Esportes" background="black" />
      <ProductsList
        games={gamesSimulacao}
        title="Simulação"
        background="gray"
      />
      <ProductsList games={gamesLuta} title="Luta" background="black" />
      <ProductsList games={gamesRPG} title="RPG" background="gray" />
    </>
  )
}

export default Categories
