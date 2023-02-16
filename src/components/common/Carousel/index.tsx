import { FC } from "react";
import Carousel from "react-bootstrap/Carousel";
import { backdrop_sizes, base_url } from "../../../constants";
import { Movie } from "../../../types";
import './style.scss'

type Props = {
  movies : Movie[]
}

const CarouselMv: FC<Props> = ({movies}) => {
  return (
    <Carousel className="mb-5" fade>
      {movies && movies.filter((v,index) => index < 6)
      .map((movie) => (
        <Carousel.Item className="carousel-img" key={movie.id} interval={500}>
        <img
          className="d-block w-100"
          src={`${base_url}${backdrop_sizes[3]}${movie.backdrop_path}`}
          alt={movie.title}
        />
        <Carousel.Caption className="carousel-text">
          <h3>{movie.title}</h3>
          <p>
            {movie.overview}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
    </Carousel>
  );
};

export { CarouselMv };
