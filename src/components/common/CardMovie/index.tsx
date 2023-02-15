import { FC } from "react";
import { Card } from "react-bootstrap";
import './style.scss'

type Props = {
  img: string;
  title: string;
};

const CardMovie: FC<Props> = ({ title, img }) => {
  return (
    <Card bg="dark" className="card">
      <Card.Img className="poster" src={img} alt={title} />
    </Card>
  );
};

export { CardMovie };
