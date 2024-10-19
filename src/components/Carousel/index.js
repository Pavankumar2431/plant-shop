import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './index.css'

const MyCarousel = () => {
  const slides = [
    { id: 1, imageUrl:'https://res.cloudinary.com/dgaxscbrn/image/upload/v1729303768/362237370ea139219155cf9fca2448d3_tk6syc.png',
        text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum ' },
    { id: 2, imageUrl:'https://res.cloudinary.com/dgaxscbrn/image/upload/v1729303796/8375cef653c6b9ae388a7f2dda4ba454_rt1b9u.png',
        text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum ' },
    { id: 3, imageUrl:'https://res.cloudinary.com/dgaxscbrn/image/upload/v1729303804/935a62fb31df9354ded9299559307ae6_ak7qkt.png',
        text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum ' },
    { id: 4, imageUrl:'https://res.cloudinary.com/dgaxscbrn/image/upload/v1729303824/7eca96d5008198d2181b991de6f19034_m4yqks.png',
        text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum ' },
    { id: 5, imageUrl:'https://res.cloudinary.com/dgaxscbrn/image/upload/v1729303845/ed50532940537d9d39d2626bb7a95167_ca3iwx.png',
        text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum ' },
    { id: 6, imageUrl:'https://res.cloudinary.com/dgaxscbrn/image/upload/v1729303768/362237370ea139219155cf9fca2448d3_tk6syc.png',
        text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum ' },
    { id: 7, imageUrl:'https://res.cloudinary.com/dgaxscbrn/image/upload/v1729303796/8375cef653c6b9ae388a7f2dda4ba454_rt1b9u.png',
        text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum ' },
    { id: 8, imageUrl:'https://res.cloudinary.com/dgaxscbrn/image/upload/v1729303804/935a62fb31df9354ded9299559307ae6_ak7qkt.png',
        text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum ' },
    { id: 9, imageUrl:'https://res.cloudinary.com/dgaxscbrn/image/upload/v1729303768/362237370ea139219155cf9fca2448d3_tk6syc.png',
        text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum ' },
    { id: 10, imageUrl:'https://res.cloudinary.com/dgaxscbrn/image/upload/v1729303845/ed50532940537d9d39d2626bb7a95167_ca3iwx.png',
        text:'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum ' },
  ];

  return (
    <Carousel
  additionalTransfrom={0}
  arrows={true}
  autoPlay={false}
  centerMode={false}
  draggable={true}
  infinite={true}
  keyBoardControl={true}
  minimumTouchDrag={50}
  renderButtonGroupOutside={false}
  showDots={false}
  slidesToSlide={1}
  swipeable={true}
  itemClass=""
  containerClass="carousel-container"
  dotListClass=""
  sliderClass=""
  partialVisible={false}
  responsive={{
    largeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 7, // 7 items on large desktops
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 5, // 5 items on standard desktops
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 3, // 3 items on tablets
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2, // 2 items on mobile
    },
  }}
>
  {slides.map((slide) => (
    <div key={slide.id} style={slideStyle}>
      <img src={slide.imageUrl} className='carousel-img' alt={slide.id} />
      <p className='pt-3'>{slide.text}</p>
    </div>
  ))}
</Carousel>

  );
};

// Custom styling for individual slides
const slideStyle = {
  padding: '10px',
  textAlign: 'center',
  fontSize: '16px',
};

export default MyCarousel;
