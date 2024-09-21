import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { useSelector } from 'react-redux'

export default function Slider() {
    const Banner = useSelector((state) => state.Reducers.banner)

    return (
        <div className="flex items-center justify-center w-full px-2 mt-3 md:mt-0 md:px-6">
            <Carousel
                infiniteLoop
                autoPlay
                swipeable={true}
                showThumbs={false}
                showIndicators={false}
                showArrows={false}
                showStatus={false}
                interval={3000} // Adjusted to 3000 for smoother transitions
                transitionTime={1000} // Adjusted to 1000 for faster transitions
                className="w-full md:w-[90%] self-center"
            >
                {Banner?.map((item, index) => (
                    <div
                        className="flex justify-center items-center"
                        key={index}
                    >
                        <img
                            className="w-full h-[150px] md:h-[400px] lg:h-[500px] md:object-contain"
                            src={item?.img?.uri}
                            alt={`Banner ${index + 1}`}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}
