import { video } from "../../types";
import { apiMovies } from "../../utils/axios";

const get = async (params: string, page?: string) => {
  const response = await apiMovies.get(params, {
    params: {
      page: page,
    },
  });
  return response.data;
};

const getDetails = async (id: string) => {
  const response = await apiMovies.get(`movie/${id}`);
  return response.data;
};

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
 
const getTrailer = async (id: string) => {
  const response = await apiMovies.get(`movie/${id}/videos`);
  const trailer = response.data.results.find((video:video) => video.type === 'Trailer');
  return trailer;
}

export const moviesServices = { get, getDetails, searcher, getTrailer }
