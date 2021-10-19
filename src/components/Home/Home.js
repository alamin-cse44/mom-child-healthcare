import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../assets/slider/5330588.jpg';
import slide2 from '../../assets/slider/3996157.jpg';
import slide3 from '../../assets/slider/5441122.jpg';

const Home = () => {
    return (
        <>
        <div className="container mt-5">
          <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 className='text-warning'>Health is wealth</h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Exercise Keep you perfect</h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className='text-warning'>Take Health Tips</h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
        
        </>
    );
};

export default Home;