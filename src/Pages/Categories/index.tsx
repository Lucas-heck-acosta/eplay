import {
  useGetActionGamesQuery,
  useGetFigthingGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

import ProductsList from '../../components/ProductsList'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: fightingGames, isLoading: isLoadingFight } =
    useGetFigthingGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: sportsGames, isLoading: isLoadingSports } =
    useGetSportsGamesQuery()

  return (
    <>
      <ProductsList
        id="action"
        games={actionGames}
        title="Ação"
        background="gray"
        isLoading={isLoadingAction}
      />
      <ProductsList
        id="sports"
        games={sportsGames}
        title="Esportes"
        background="black"
        isLoading={isLoadingSports}
      />
      <ProductsList
        id="simulation"
        games={simulationGames}
        title="Simulação"
        background="gray"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        id="fight"
        games={fightingGames}
        title="Luta"
        background="black"
        isLoading={isLoadingFight}
      />
      <ProductsList
        id="rpg"
        games={rpgGames}
        title="RPG"
        background="gray"
        isLoading={isLoadingRpg}
      />
    </>
  )
}

export default Categories
