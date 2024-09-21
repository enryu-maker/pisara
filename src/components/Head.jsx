import React from 'react'
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";
import { Image } from '../assets/Image';
export default function Head() {
  return (
      <div className='w-[90%] h-[80px] sticky top-0 z-50 bg-white flex justify-between items-center '>
          <div className='flex items-center w-[30%]'>
              <h3 className=' font-Poppins uppercase text-sm font-bold text-gray-500 tracking-widest'>Free Shipping Globally</h3>
          </div>
          <div className='flex items-center justify-center space-x-3 w-[30%]'>
              <img src={Image.logo} className='h-[80px] w-[80px]' alt="" />
          <h1 className="bg-gradient-to-r from-pink-400 via-pink-400 to-pink-600 inline-block text-transparent bg-clip-text font-Poppins font-bold text-4xl">Pisara Sarees</h1>
              
          </div>
          <div className='flex justify-end items-center w-[30%] space-x-5'>
              <a href="https://instagram.com/pratikshabankar_official?igshid=MzMyNGUyNmU2YQ==">
              <FaInstagram  className='text-2xl text-gray-500 hover:text-pink-600' />
              </a>
              <a href="https://www.facebook.com/pratikshabankar53?mibextid=ZbWKwL">
              <FaFacebook  className='text-2xl text-gray-500 hover:text-pink-600' />
              </a>
              <a href="https://youtube.com/@PratikshaBankar?si=eTmDNOztniTopkKp">
              <FaYoutube  className='text-2xl text-gray-500 hover:text-pink-600' />
              </a>
          </div>
    </div>
  )
}
