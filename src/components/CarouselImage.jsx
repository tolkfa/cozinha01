import Carousel from 'react-bootstrap/Carousel';
import './CarouselImage.css';

import Image1 from '../../public/Img1.jpg';
import Image2 from '../../public/Img2.jpg';
import Image3 from '../../public/Img3.jpg';

function CarouselImage() {

  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={Image1} />
        <Carousel.Caption>
          <h3>panelas</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Image2} />
        <Carousel.Caption>
          <h3>talheres</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Image3} />
        <Carousel.Caption>
          <h3>Eletrodomésticos</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselImage;