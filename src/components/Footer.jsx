import React from 'react'
import { Image } from '../assets/Image'

export default function Footer() {
    return (
        <div className="border-t-2 border-gray-100 w-full flex justify-center items-center bg-white">
            <div className="w-[90%] self-center flex flex-col justify-center items-center py-4">
                <h1 className="bg-gradient-to-r from-pink-400 via-pink-400 to-pink-600 inline-block text-transparent bg-clip-text font-Poppins font-black text-2xl sm:text-3xl md:text-4xl text-center">
                    Pisara Sarees
                </h1>
                <div className="w-full flex flex-col md:flex-row justify-between items-center py-5">
                    <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                        <h1 className="text-gray-500 py-4 text-lg sm:text-xl md:text-2xl font-Poppins font-bold">
                            Page Sites
                        </h1>
                        <h2>
                            <a
                                href="#"
                                className="text-gray-500 text-base sm:text-lg font-Poppins font-medium hover:text-pink-500"
                            >
                                Home
                            </a>
                        </h2>
                        <h2>
                            <a
                                href="#"
                                className="text-gray-500 text-base sm:text-lg font-Poppins font-medium hover:text-pink-500"
                            >
                                About Us
                            </a>
                        </h2>
                        <h2>
                            <a
                                href="#"
                                className="text-gray-500 text-base sm:text-lg font-Poppins font-medium hover:text-pink-500"
                            >
                                Terms & Conditions
                            </a>
                        </h2>
                    </div>
                    <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                        <h1 className="text-gray-500 py-4 text-lg sm:text-xl md:text-2xl font-Poppins font-bold">
                            Help
                        </h1>
                        <h2>
                            <a
                                href="#"
                                className="text-gray-500 text-base sm:text-lg font-Poppins font-medium hover:text-pink-500"
                            >
                                Privacy Policy
                            </a>
                        </h2>
                        <h2>
                            <a
                                href="#"
                                className="text-gray-500 text-base sm:text-lg font-Poppins font-medium hover:text-pink-500"
                            >
                                Shipping Policy
                            </a>
                        </h2>
                        <h2>
                            <a
                                href="#"
                                className="text-gray-500 text-base sm:text-lg font-Poppins font-medium hover:text-pink-500"
                            >
                                Cancellation & Returns
                            </a>
                        </h2>
                    </div>
                    <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                        <h1 className="text-gray-500 py-4 text-lg sm:text-xl md:text-2xl font-Poppins font-bold">
                            Contact Us
                        </h1>
                        <h2>
                            <a
                                href="#"
                                className="text-gray-500 text-base sm:text-lg font-Poppins font-medium hover:text-pink-500"
                            >
                                Nashik
                            </a>
                        </h2>
                        <h2>
                            <a
                                href="mailto:pisarasarees@gmail.com"
                                className="text-gray-500 text-base sm:text-lg font-Poppins font-medium hover:text-pink-500"
                            >
                                pisarasarees@gmail.com
                            </a>
                        </h2>
                    </div>
                </div>
                <div className="w-full flex justify-center border-y-[1px] py-5 items-center">
                    <img
                        src={Image.foot}
                        alt="Footer Image"
                        className="max-w-full h-auto md:max-w-md"
                    />
                </div>
                <p className="text-gray-500 font-Poppins text-sm text-center py-5">
                    By continuing past this page, you agree to our Terms of
                    Service, Cookie Policy, Privacy Policy and Content Policies.
                    All trademarks are properties of their respective owners.
                    2023 © Pisara Sarees™ Ltd. All rights reserved.
                </p>
                <div className="w-full flex justify-center border-y-[1px] py-5 items-center">
                    <h1 className="font-Poppins text-sm md:text-xl font-semibold capitalize text-gray-500 text-center">
                        Made with ❤️ by{' '}
                        <a
                            className="hover:text-blue-500 hover:underline"
                            href="https://www.nerdtech.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            nerdtech!!
                        </a>
                    </h1>
                </div>
            </div>
        </div>
    )
}
