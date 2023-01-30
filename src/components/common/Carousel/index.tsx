import { FC } from "react";
import Carousel from "react-bootstrap/Carousel";

type Props = {

}

const CarouselMv: FC<Props> = () => {
  return (
    <Carousel fade>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1313263696/es/foto/tiempo-en-familia-en-la-playa.jpg?s=612x612&w=is&k=20&c=ZQIQpJAHjjCe6pnCwNJhgeeqqn1JrcIGavSThzT68_I="
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1305329364/es/foto/pareja-jugando-en-la-playa.jpg?s=612x612&w=is&k=20&c=XHA8iSB4PLvxZ2QFnWMhOPPkk2XvTKYnHS8hYhdWdlk="
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1313263659/es/foto/te-voy-a-tirar.jpg?s=612x612&w=is&k=20&c=heJBXHuaJj30iPjokrVOLV4fHar4Rauz7XCI1jWxOm4="
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export { CarouselMv };
