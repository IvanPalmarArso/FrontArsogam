//Slider Component
import Carousel from 'react-bootstrap/Carousel';
//Images
import farmImage1 from './img/slider/farmImage1.jpeg'
import farmImage2 from './img/slider/farmImage2.jpeg'
//styles
import './style/carousel.css'

function CarouselHome() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='imageCarousel' src={farmImage1} alt="carouselImage" />
      </Carousel.Item>
      <Carousel.Item>
            <img className='imageCarousel' src={farmImage2} alt="carouselImage" />
        </Carousel.Item>      
    </Carousel>
  );
}

export default CarouselHome;