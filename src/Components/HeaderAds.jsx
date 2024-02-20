import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function HeaderAds() {
    return (
        <div>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img style={{height:'100px'}}
                        className="d-block w-100"
                        src="https://i.postimg.cc/sf5fH9sJ/ads1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img  style={{height:'100px'}}
                        className="d-block w-100"
                        src="https://i.postimg.cc/pLzgRkc0/ads2.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img  style={{height:'100px'}}
                        className="d-block w-100"
                        src="https://i.postimg.cc/rsqSRyq0/ads3.webp"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HeaderAds