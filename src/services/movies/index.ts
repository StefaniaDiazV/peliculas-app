import { apiMovies } from "../../utils/axios"

const get = async (params:string) => {
  const response =  await apiMovies.get(params)
  return response.data
}

const getDetails = async (id: string ) => {
  const response = await apiMovies.get(
   `movie/${id}`,
  )
  return response.data
}

export const moviesServices = { get, getDetails }