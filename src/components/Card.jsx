import React from 'react'
import { baseURL } from '../helper/Helper'

export default function Card({
    item
}) {
  return (
          <div className="w-[300px] h-[350px] flex flex-col justify-between my-5 items-center">
          <img src={baseURL + item?.image} className="w-[300px] h-[300px] object-cover " />
          <h2 className=' font-Poppins font-semibold capitalize'>{item?.name}</h2>
          <h1 className=' font-Poppins font-bold text-lg'>₹ {item?.discounted_price}</h1>
          </div>
  )
}
