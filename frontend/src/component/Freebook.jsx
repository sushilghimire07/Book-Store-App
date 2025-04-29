import React from 'react';
import list from '../assets/list.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';

export const Freebook = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrow:false,
          dots:true
        }
      },
      {
        breakpoint: 685,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow:false,
          dots:true
        }
      }
    ]
  };

  // Fixed the filter method
  const filterData = list.filter((data) => {
    return data.category === "Free";  // Explicitly return the filtered data
  });

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-[60px]'> 
        <div>
          <h1 className='font-bold text-xl pb-2'>Free offered courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ea cum, voluptatibus ullam
            quasi tenetur, fugiat velit adipisci facilis est ipsam alias ut quia reiciendis aliquam!
            Tempora autem dolorum eum.
          </p>
        </div>
      </div>

      <Slider {...settings}>
        {filterData.map((item) => {
          return <Cards item={item} key={item.id} />;  
        })}
      </Slider>
    </>
  );
};
