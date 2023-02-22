import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { CardMovie } from "../../components/common/CardMovie";
import { SearchForm } from "../../components/forms";
import { Layout } from "../../components/layout";
import { base_url, poster_sizes } from "../../constants";
import { moviesServices } from "../../services/movies";
import { Movie, search } from "../../types";


const Search = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const title = searchParams.get('title')
    moviesServices.searcher(title).then((data) => {
      setMovies(data.results)
    })
  },[searchParams])

  const searchQuery = (params: search ) => {
    setSearchParams(params)
  }

  return (
    <Layout>
      <SearchForm onSearch={searchQuery} />
      <Container fluid className="p-4">
        <Row>
          {movies.map((movie) => (
            <Col key={movie.id} sm={6} md={4} lg={3} className="mb-4">
              <CardMovie
                title={movie.title}
                img={`${base_url}${poster_sizes[3]}${movie.poster_path}`}
                id={movie.id}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export { Search };
