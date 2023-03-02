import { Layout } from "../../components/layout";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { CardMovie } from "../../components/common/CardMovie";
import { SearchForm } from "../../components/forms";
import { base_url, poster_sizes } from "../../constants";
import { moviesServices } from "../../services/movies";
import { Movie, search } from "../../types";
import { usePagination } from "../../hooks";
import { PaginationMv } from "../../components/common";
import { withAuth } from "../../hoc";


const SearchPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { setTotalPages, totalPages, handlePrev, handleNext, params, setParams, handleLast, handleFirst , page, setPage } = usePagination()

  useEffect(() => {
    setSearchParams(params);
    const currentPage = searchParams.get("page");
    const title = searchParams.get('title')
    moviesServices.searcher(title, currentPage).then((data) => {
      setMovies(data.results)
      setTotalPages(data.total_pages)
      setPage(data.page)
    })
  },[searchParams, params])

  const searchQuery = (params: search ) => {
    setParams(prevState => ({...prevState, title : params.title}))
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
                img={movie.poster_path ? `${base_url}${poster_sizes[3]}${movie.poster_path}` : '/img/no-poster.png'}
                id={movie.id}
              />
            </Col>
          ))}
        </Row>
        <PaginationMv first={handleFirst} prev={handlePrev} next={handleNext} totalPages={totalPages} page={page} last={handleLast}/>
      </Container>
    </Layout>
  );
};

export const Search = withAuth(SearchPage);
