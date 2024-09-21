import React from 'react'
import Head from '../components/Head'
import Slider from '../components/Slider'
import Fresh from '../components/Fresh'
import Products from '../components/Products'
import Footer from '../components/Footer'

export default function Home() {
  return (
      <div className='w-full flex flex-col items-center '>
          <Head />
          <Slider />
          <Fresh />
          <Products />
          <Footer/>
    </div>
  )
}
