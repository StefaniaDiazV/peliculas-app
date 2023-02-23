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

const searcher = async (title: string | null, page: string | null = '1' ) => {
  const response = await apiMovies.get(
    "search/movie",
    {
      params: {
        query:title,
        page: page,
      },
    }
  )
  return response.data ;
};

export const moviesServices = { get, getDetails, searcher }