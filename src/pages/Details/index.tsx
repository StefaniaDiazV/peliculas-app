import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Calendar, StarFill } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/layout";
import { backdrop_sizes, base_url, poster_sizes } from "../../constants";
import { withAuth } from "../../hoc";
import { moviesServices } from "../../services/movies";
import { MovieDetail } from "../../types";
import "./style.scss";

const DetailsPage = () => {
  const [details, setDetails] = useState<MovieDetail>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      moviesServices.getDetails(id).then((data) => setDetails(data));
    }
  }, []);

  return (
    <Layout>
      {details && (
        <Container className="details" fluid>
          <div className="box-details">
            <img className="poster"
              src={`${base_url}${poster_sizes[3]}${details.poster_path}`}
            />
          </div>
          <div className="box-details">
            <h2>{details.title}</h2>
            <div className="detail-top">
              <span className="votes">
                <StarFill /> {details.vote_average.toFixed(1)}
              </span>
              <span className="year">
                <Calendar /> {details.release_date.slice(0, 4)}
              </span>
              {details.production_countries[0] && (
                <span className="country">
                  {details.production_countries[0]?.name}
                </span>
              )}
            </div>
            <p>{details.overview}</p>
            <div className="details-bottom">
              <p>
                Generos : {" "}
                <span>{details.genres.map((gen) => gen.name).join(", ")} </span>
              </p>
              <p>
                Productoras :{" "}
                <span>
                  {details.production_companies
                    .filter((v, index) => index < 2)
                    .map((gen) => gen.name)
                    .join(", ")}
                </span>
              </p>
            </div>
          </div>
          <div className="img-box">
            <img
              src={`${base_url}${backdrop_sizes[3]}${details.backdrop_path}`}
            />
          </div>
        </Container>
      )}
    </Layout>
  );
};

export const Details = withAuth(DetailsPage);
