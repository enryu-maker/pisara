import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux';
export default function Slider() {
    const Banner = useSelector(state => state.Reducers.banner)
    return (
      <div className='flex items-center justify-center w-full'>
        
      <Carousel
      infiniteLoop
      autoPlay
      swipeable={true}
      showThumbs={false}
      showIndicators={false}
      showArrows={false}
      showStatus={false}
      interval={3500}
                transitionTime={2000}
                className='w-[90%] self-center'
      >
          {
              Banner?.map((item, index) => (
                <div className='' key={index}>
                    <img className=' w-[90%]' src={item?.img?.uri} />
            </div>
              ))
          }
            </Carousel>
      </div>

  )
}
