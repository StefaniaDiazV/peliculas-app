import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CardMovie } from "../../components/common/CardMovie";
import { Layout } from "../../components/layout";
import { base_url, poster_sizes } from "../../constants";
import { moviesServices } from "../../services/movies";
import { Movie } from "../../types";

const Top = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    moviesServices.get("popular").then((data) => setMovies(data));
  }, []);

  return (
    <Layout>
      <Container fluid className="p-4">
        <h2>Populares</h2>
        <Row>
          {movies &&
            movies.map((movie) => (
              <Col key={movie.id} sm={6} md={4} lg={3} className="mb-4">
                <CardMovie
                  title={movie.title}
                  img={`${base_url}${poster_sizes[3]}${movie.poster_path}`}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </Layout>
  );
};

export { Top };
