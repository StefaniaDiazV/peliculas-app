import { mapToArray } from "../../helpers/mapToArray"
import { Movie } from "../../types"
import { apiMovies } from "../../utils/axios"

const get = async (params:string) => {
  const response =  await apiMovies.get(params)
  return mapToArray<Movie>(response.data.results)
}

export const moviesServices = { get }