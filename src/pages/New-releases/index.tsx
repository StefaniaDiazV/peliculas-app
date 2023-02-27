import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { PaginationMv } from "../../components/common";
import { CardMovie } from "../../components/common/CardMovie";
import { Layout } from "../../components/layout";
import { base_url, poster_sizes } from "../../constants";
import { usePagination } from "../../hooks";
import { moviesServices } from "../../services/movies";
import { Movie } from "../../types";

const NewReleases = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { setTotalPages, totalPages, page, setPage, handleFirst, handlePrev, handleNext, handleLast, params} = usePagination()
 

  useEffect(() => {
    setSearchParams({page:params.page});
    const currentPage = searchParams.get("page");
    moviesServices
      .get("movie/upcoming", currentPage || '1')
      .then((data) => {
        setMovies(data.results)
        setTotalPages(data.total_pages)
        setPage(data.page)
      });
  }, [searchParams, params]);

  return (
    <Layout>
      <Container fluid className="p-4">
        <h2>Ultimos lanzamientos</h2>
        <Row>
          {movies &&
            movies.map((movie) => (
              <Col key={movie.id} sm={6} md={4} lg={3} className="mb-4">
                <CardMovie
                  title={movie.title}
                  img={`${base_url}${poster_sizes[3]}${movie.poster_path}`}
                  id={movie.id}
                />
              </Col>
            ))}
        </Row>
        <PaginationMv first={handleFirst} prev={handlePrev} next={handleNext} last={handleLast} totalPages={totalPages} page={page}/>
      </Container>
    </Layout>
  );
};

export { NewReleases };
