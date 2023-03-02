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
  
  export type User = {
    id: string;
    name: string;
    lastname: string;
    email: string;
    password: string;
    birthdate: Date;
    token?: string | null;
  };
  
  export type SignUpForm = Omit<User, "id" | "birthdate"> & { birthdate: Date };
  export type SignUpPayload = SignUpForm;

  export type loginForm = {
    email: string;
    pass: string;
  }

  export type video = {
    id: string 
    iso_639_1 : string
    iso_3166_1 : string
    key: string
    name : string
    site: string
    size : number
    type : string
  }