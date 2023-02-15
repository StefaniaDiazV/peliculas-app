import { mapToArray } from "../../helpers/mapToArray"
import { Movie } from "../../types"
import { apiMovies } from "../../utils/axios"

const get = async (params:string) => {
  const response =  await apiMovies.get(params)
  return mapToArray<Movie>(response.data.results)
}

const getDetails = async (id: string ) => {
  const response = await apiMovies.get(
   `movie/${id}`,
  )
  return response.data
}

export const moviesServices = { get }