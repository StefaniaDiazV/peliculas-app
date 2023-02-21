import { useEffect, useState } from "react";
import { CardSlider, CarouselMv } from "../../components/common"
import { Layout } from "../../components/layout"
import { moviesServices } from "../../services/movies";
import { Movie } from "../../types";

const Home = () => {

    const [nowPlaying, setnowPlaying] = useState<Movie[]>([]);
    const [popular, setpopular] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);

    useEffect(() => {
        moviesServices.get("movie/now_playing").then((data) => setnowPlaying(data));
        moviesServices.get("movie/popular").then((data) => setpopular(data));
        moviesServices.get("movie/top_rated").then((data) => setTopRated(data));
    }, []);

    return (
        <Layout>
            <CarouselMv movies={nowPlaying} />
            <CardSlider listTitle="Peliculas Populares" movies={popular} />
            <CardSlider listTitle="Mejores Peliculas" movies={topRated} />
        </Layout>
    )
}

export { Home }