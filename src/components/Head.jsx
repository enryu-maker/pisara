import React from 'react'
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa6'
import { Image } from '../assets/Image'

export default function Head() {
    return (
        <div className="w-full h-[80px] sticky top-0 z-50 bg-white flex justify-between items-center px-4 lg:px-10 shadow-md">
            {/* Free Shipping Banner */}
            <div className="hidden md:flex items-center w-auto md:w-[30%]">
                <h3 className="font-Poppins uppercase text-xs md:text-sm font-bold text-gray-500 tracking-widest">
                    Free Shipping Globally
                </h3>
            </div>

            {/* Logo and Title */}
            <div className="flex items-center justify-center w-auto md:w-[40%]">
                <img
                    src={Image.logo}
                    className="h-[50px] w-[50px] md:h-[80px] md:w-[80px] mr-2"
                    alt="Logo"
                />
                <h1 className="bg-gradient-to-r from-pink-400 via-pink-400 to-pink-600 inline-block text-transparent bg-clip-text font-Poppins font-bold text-xl md:text-4xl text-center">
                    Pisara Sarees
                </h1>
            </div>

            {/* Social Icons */}
            <div className="flex justify-end items-center w-auto md:w-[30%] space-x-4 md:space-x-5">
                <a
                    href="https://instagram.com/pratikshabankar_official?igshid=MzMyNGUyNmU2YQ=="
                    aria-label="Instagram"
                    className="text-xl md:text-2xl text-gray-500 hover:text-pink-600"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://www.facebook.com/pratikshabankar53?mibextid=ZbWKwL"
                    aria-label="Facebook"
                    className="text-xl md:text-2xl text-gray-500 hover:text-pink-600"
                >
                    <FaFacebook />
                </a>
                <a
                    href="https://youtube.com/@PratikshaBankar?si=eTmDNOztniTopkKp"
                    aria-label="YouTube"
                    className="text-xl md:text-2xl text-gray-500 hover:text-pink-600"
                >
                    <FaYoutube />
                </a>
            </div>
        </div>
    )
}
