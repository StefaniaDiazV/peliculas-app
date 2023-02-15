import { mapToArray, mapToArrayMv } from "../../helpers/mapToArray"
import { Movie } from "../../types"
import { apiMovies } from "../../utils/axios"

const get = async (params:string) => {
  const response =  await apiMovies.get(params)
  return mapToArrayMv<Movie>(response.data.results)
}

const getDetails = async (id: string ) => {
  const response = await apiMovies.get(
   `movie/${id}`,
  )
  return response.data
}

export const moviesServices = { get, getDetails }