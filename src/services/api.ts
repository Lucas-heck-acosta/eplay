import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../Pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay/'
  }),
  endpoints: (builder) => ({
    getFearturedGame: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getActionGames: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    getSportsGames: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    getSimulationGames: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getFigthingGames: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    getRpgGames: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    })
  })
})
export const {
  useGetFearturedGameQuery,
  useGetOnSaleQuery,
  useGetSoonQuery,
  useGetActionGamesQuery,
  useGetFigthingGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery,
  useGetGameQuery
} = api

export default api
