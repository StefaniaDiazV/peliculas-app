import { Container } from "react-bootstrap";
import { Calendar, StarFill } from "react-bootstrap-icons";
import { Layout } from "../../components/layout";
import "./style.scss";

const Details = () => {
  return (
    <Layout>
      <Container className="details" fluid>
        <div className="box-text">
          <h2>Titulo</h2>
          <div className="detail-top">
            <span className="votes"><StarFill/> 35</span>
            <span className="year"><Calendar/> 2022</span>
            <span className="country">Corea</span>
          </div>
          <p>
            Darcy and Tom gather their families for the ultimate destination
            wedding but when the entire party is taken hostage, “’Til Death Do
            Us Part” takes on a whole new meaning in this hilarious,
            adrenaline-fueled adventure as Darcy and Tom must save their loved
            ones—if they don’t kill each other first.
          </p>
          <div className="details-bottom">
            <p>Generos : <span>Accion , comedia </span></p>
            <p>Productoras: <span> Warner</span>
            </p>
          </div>
        </div>
        <div className="img-box">
          <img
            src={`https://image.tmdb.org/t/p/w1000_and_h450_multi_faceshttps://www.themoviedb.org/t/p/original/ur7Z7E6t1B6fWMreXNMpsUTcBGX.jpg`}
          />
        </div>
      </Container>
    </Layout>
  );
};

export { Details };
