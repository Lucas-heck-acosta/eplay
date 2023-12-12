import {
  useGetActionGamesQuery,
  useGetFigthingGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

import ProductsList from '../../components/ProductsList'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightingGames } = useGetFigthingGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportsGames } = useGetSportsGamesQuery()

  if (
    actionGames &&
    fightingGames &&
    rpgGames &&
    simulationGames &&
    sportsGames
  ) {
    return (
      <>
        <ProductsList games={actionGames} title="Ação" background="gray" />
        <ProductsList games={sportsGames} title="Esportes" background="black" />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="gray"
        />
        <ProductsList games={fightingGames} title="Luta" background="black" />
        <ProductsList games={rpgGames} title="RPG" background="gray" />
      </>
    )
  }
  return <h3>Carregando...</h3>
}

export default Categories
