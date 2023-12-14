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
        <ProductsList
          id="action"
          games={actionGames}
          title="Ação"
          background="gray"
        />
        <ProductsList
          id="sports"
          games={sportsGames}
          title="Esportes"
          background="black"
        />
        <ProductsList
          id="simulation"
          games={simulationGames}
          title="Simulação"
          background="gray"
        />
        <ProductsList
          id="fight"
          games={fightingGames}
          title="Luta"
          background="black"
        />
        <ProductsList id="rpg" games={rpgGames} title="RPG" background="gray" />
      </>
    )
  }
  return <h3>Carregando...</h3>
}

export default Categories
