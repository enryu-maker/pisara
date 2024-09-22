import React from 'react'
import Head from '../components/Head'
import Slider from '../components/Slider'
import Fresh from '../components/Fresh'
import Products from '../components/Products'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'
export default function Home() {
    return (
        <div className="w-full flex flex-col items-center ">
            <Helmet>
                <title>
                    Pisara Sarees - Exquisite Collection of Traditional Sarees
                </title>
                <meta
                    name="description"
                    content="Explore a wide range of beautiful sarees from Pisara Sarees. Traditional and contemporary designs for every occasion. Shop now!"
                />
                <meta
                    name="keywords"
                    content="Pisara Sarees, saree, traditional saree, Indian saree, silk saree, cotton saree"
                />
            </Helmet>
            <Head />
            <Slider />
            <Fresh />
            <Products />
            <Footer />
        </div>
    )
}
