import axios from "axios";

const apiMovies = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key : "dc1f9a512f2bcc2b6347cc6242e7f890",
    }
})

const api = axios.create({
    baseURL: "https://peliculas-app-6357b-default-rtdb.firebaseio.com"
})

export { apiMovies, api }