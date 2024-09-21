import React, { useState } from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'

const ProductTab = ({ products }) => {
    const categories = Object.keys(products || {}) // Use optional chaining and default empty object
    const [selectedTab, setSelectedTab] = useState(categories[0] || '') // Initialize with first category or empty string
    const [sortOption, setSortOption] = useState('default')

    const handleSortChange = (event) => {
        setSortOption(event?.target?.value)
    }

    const sortProducts = (products) => {
        switch (sortOption) {
            case 'priceLowToHigh':
                return products.sort(
                    (a, b) => a.discounted_price - b.discounted_price
                )
            case 'priceHighToLow':
                return products.sort(
                    (a, b) => b.discounted_price - a.discounted_price
                )
            case 'nameAZ':
                return products.sort((a, b) => a.name.localeCompare(b.name))
            case 'nameZA':
                return products.sort((a, b) => b.name.localeCompare(a.name))
            default:
                return products
        }
    }

    const renderProducts = (category) => {
        if (!products || !products[category]) return null // Return null if products or category is not available
        const sortedProducts = sortProducts([...products[category].data]) // Use spread to avoid mutating state
        return (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {sortedProducts.map((product) => (
                    <Card item={product} key={product?.id} />
                ))}
            </div>
        )
    }

    return (
        <div className="">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 items-center mb-4 sm:mb-6">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base font-Poppins font-bold ${
                            selectedTab === category
                                ? 'border-b-2 border-b-pink-500 text-pink-500'
                                : 'text-gray-600 hover:text-pink-500'
                        }`}
                        onClick={() => setSelectedTab(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            {/* Sorting */}
            <div className="flex justify-end font-Poppins font-semibold space-x-2 sm:space-x-4 mb-4 sm:mb-6">
                <select
                    value={sortOption}
                    onChange={handleSortChange}
                    className="border p-2 rounded-md w-[200px] sm:w-[300px] outline-none focus:outline-pink-500"
                >
                    <option value="default">Default</option>
                    <option value="priceLowToHigh">Price: Low to High</option>
                    <option value="priceHighToLow">Price: High to Low</option>
                    <option value="nameAZ">Name: A-Z</option>
                    <option value="nameZA">Name: Z-A</option>
                </select>
            </div>
            {/* Product Grid */}
            <div className="flex flex-wrap justify-center">
                {renderProducts(selectedTab)}
            </div>
        </div>
    )
}

export default function Products() {
    const sareeData = useSelector((state) => state.Reducers.products)
    if (!sareeData || Object.keys(sareeData).length === 0) {
        return (
            <div className="min-h-screen w-[90%] flex flex-col items-center self-center">
                <h1 className="text-center text-xl">No products available</h1>
            </div>
        )
    }

    return (
        <div className="min-h-screen w-[90%] flex flex-col items-center self-center">
            <h1 className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 inline-block pb-5 text-transparent uppercase bg-clip-text font-Poppins text-center font-bold text-2xl sm:text-3xl">
                Product Showcase
            </h1>
            <ProductTab products={sareeData} />
        </div>
    )
}
