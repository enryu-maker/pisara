import React from 'react'
import Head from '../components/Head'
import Footer from '../components/Footer'
import { getProductInfo } from '../store/actions'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FaLink, FaStar } from 'react-icons/fa6'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { baseURL } from '../helper/Helper'
export default function Info() {
    const { pathname } = useLocation()
    const dispatch = useDispatch()
    const [product, setProduct] = React.useState({})
    const [loading, setLoading] = React.useState(false)
    const [loadingLink, setLoadingLink] = React.useState(false)

    const calcPercentage = (x, y) => Math.round(((x - y) / y) * 100)

    const handleLinkCopy = async () => {
        setLoadingLink(true)
        await navigator.clipboard.writeText(
            'www.pisarasarees.in/#/' +
                'product-info/' +
                pathname.split('/').slice(-1)[0]
        )
        toast.success('Link Copied', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        })
        setLoadingLink(false)
    }
    React.useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        dispatch(
            getProductInfo(
                pathname.split('/').slice(-1)[0],
                setProduct,
                setLoading
            )
        )
    }, [])
    return (
        <div className="w-full flex flex-col items-center font-Poppins ">
            <Head />
            <div className="flex flex-col md:flex-row py-5 justify-between items-start w-[90vw] mx-auto">
                <img
                    src={baseURL + product.image}
                    className="h-[550px] w-full md:w-[35%] rounded-lg object-contain"
                    alt={product.name}
                />
                <div className="h-[550px] w-full md:w-[60%] p-5 bg-white ">
                    <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                    <div className="flex items-center mb-2">
                        <FaLink
                            onClick={handleLinkCopy}
                            className={`cursor-pointer ${
                                loadingLink ? 'text-gray-400' : 'text-blue-500'
                            }`}
                            size={20}
                        />
                    </div>
                    <p className="text-sm text-justify mb-4">
                        {product?.description || 'No description available.'}
                    </p>
                    <div className="flex w-full items-center space-x-1 mb-4">
                        <p className="text-gray-600">5</p>
                        <FaStar className=" text-yellow-400" />
                        <FaStar className=" text-yellow-400" />
                        <FaStar className=" text-yellow-400" />
                        <FaStar className=" text-yellow-400" />
                        <FaStar className=" text-yellow-400" />

                        <p className="text-gray-600">
                            {Math.floor(Math.random() * 100) + 1} Ratings
                        </p>
                    </div>

                    <div className="flex items-center mb-4">
                        <p className="text-2xl text-green-600 mr-2">
                            ₹ {product.discounted_price}
                        </p>
                        <p className="text-red-500 line-through">
                            MRP: ₹ {product.mrp} {''}
                        </p>
                        <span>
                            (
                            {`-${calcPercentage(
                                product.mrp,
                                product.discounted_price
                            )}%`}
                            )
                        </span>
                    </div>
                    <p className="text-gray-600 mb-2">
                        Available Quantities:{' '}
                        <span
                            className={`${
                                product.quantity <= 0
                                    ? 'text-red-600'
                                    : 'text-gray-800'
                            }`}
                        >
                            {product.quantity <= 0
                                ? 'Out Of Stock'
                                : product.quantity}
                        </span>
                    </p>
                    <p className="text-gray-600 mb-2">
                        Product Code: {product?.product_code}
                    </p>
                    <button
                        disabled={product.quantity <= 0}
                        onClick={() =>
                            window.open(
                                `https://wa.me/+918007446531?text=I am interested in ${product.name} with product id ${product.product_code}`
                            )
                        }
                        className={`mt-4 h-12 w-[200px] ${
                            product.quantity > 0 ? 'bg-pink-400' : 'bg-gray-100'
                        } text-white font-bold rounded-lg`}
                    >
                        Order Now
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
