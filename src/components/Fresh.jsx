import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'

export default function Fresh() {
    const featured = useSelector((state) => state.Reducers.featured)
    return (
        <div className="w-full py-5 flex flex-col items-center">
            {/* Title */}
            <h3 className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 inline-block text-transparent uppercase bg-clip-text font-Poppins font-bold text-xl md:text-2xl text-center">
                Fresh Arrivals
            </h3>

            {/* Product Grid */}
            <div className="w-[90%] pt-5 self-center flex flex-wrap justify-evenly">
                {featured?.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </div>
        </div>
    )
}
