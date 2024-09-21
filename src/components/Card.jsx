import React from 'react'
import { baseURL } from '../helper/Helper'
import { useDispatch } from 'react-redux'
import { getProductInfo } from '../store/actions'
import { useNavigate } from 'react-router-dom'
export default function Card({ item }) {
    const [loading, setLoading] = React.useState(false)
    const [product, setProduct] = React.useState({})
    const navigate = useNavigate()
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getProductInfo(item?.id, setProduct, setLoading))
    }, [])
    return (
        <div
            onClick={() => {
                navigate(`/product-info/${item?.id}`)
            }}
            className={`w-[160px] h-auto sm:w-[200px] md:w-[250px] lg:w-[300px] flex flex-col justify-between items-center p-3 md:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 my-3 bg-white`}
        >
            {/* Product Image */}
            <img
                src={baseURL + item?.image}
                alt={item?.name}
                className={` ${
                    product?.quantity > 0 ? '' : 'opacity-50'
                } w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[250px] object-cover`}
            />
            {/* Product Name */}
            {product?.quantity > 0 ? (
                <>
                    <h2 className="font-Poppins font-semibold capitalize mt-2 sm:mt-3 md:mt-4 text-center text-xs sm:text-sm md:text-base">
                        {item?.name}
                    </h2>
                    {/* Product Price */}
                    <h1 className="font-Poppins font-bold text-base sm:text-lg mt-1 sm:mt-2 text-pink-500">
                        ₹ {item?.discounted_price}
                    </h1>
                </>
            ) : (
                <h2 className="font-Poppins text-xl font-semibold text-red-500 capitalize mt-2 sm:mt-3">
                    Out of Stock
                </h2>
            )}
        </div>
    )
}
