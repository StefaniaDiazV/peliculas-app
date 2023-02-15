import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.min.css";
import { FC, useEffect, useState } from "react";
import { Movie } from "../../../types";
import { moviesServices } from "../../../services/movies";
import { CardMovie } from "../CardMovie";
import { base_url, breakpointsSlider, poster_sizes } from "../../../constants";

type Props = {
  search: string;
  listTitle: string;
};

const CardSlider: FC<Props> = ({ search, listTitle }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    moviesServices.get(search).then((data) => setMovies(data));
  }, []);

  return (
    <div className="py-4 px-4 justify-content-center">
      <h2>{listTitle}</h2>
      <Swiper
        modules={[Navigation, A11y]}
        navigation
        loop={true}
        breakpoints={breakpointsSlider}
      >
        {movies &&
          movies
            .filter((v, index) => index < 11)
            .map((movie) => (
              <SwiperSlide key={movie.id}>
                <CardMovie
                  title={movie.title}
                  img={`${base_url}${poster_sizes[3]}${movie.poster_path}`}
                  id={movie.id}
                />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export { CardSlider };
