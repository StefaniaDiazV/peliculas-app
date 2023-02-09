
import { apiMovies } from "../../utils/axios"

const get = async (params:string) => {
  const response =  await apiMovies.get(params)
  return response.data.results
}

export const moviesServices = { get }