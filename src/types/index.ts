export type Movie = {
    title : string
    id: number
    overview: string
    backdrop_path: string | null
    poster_path: string
  };

  type gender = {
    id: number,
    name: string
  }

  export type MovieDetail = {
    title : string
    id: number
    overview: string
    backdrop_path: string | null
    poster_path: string
    vote_average: number
    production_companies : gender[]
    genres : gender[]
    release_date: string
    production_countries : Partial<gender>[]
  };



















  export type search = {
    title : string
  }