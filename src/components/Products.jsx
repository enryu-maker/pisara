import React, {useState} from 'react'
import Card from './Card';
import { useSelector } from 'react-redux';
const ProductTab = ({ products }) => {
    const categories = Object.keys(products);
    const [selectedTab, setSelectedTab] = useState(categories[0]);
    const [sortOption, setSortOption] = useState('default');
    const handleSortChange = (event) => {
        setSortOption(event.target.value);
      };
    
      const sortProducts = (products) => {
        switch (sortOption) {
          case 'priceLowToHigh':
            return products.sort((a, b) => a.discounted_price - b.discounted_price);
          case 'priceHighToLow':
            return products.sort((a, b) => b.discounted_price - a.discounted_price);
          case 'nameAZ':
            return products.sort((a, b) => a.name.localeCompare(b.name));
          case 'nameZA':
            return products.sort((a, b) => b.name.localeCompare(a.name));
          default:
            return products;
        }
      };
    
    const renderProducts = (category) => {
        const sortedProducts = sortProducts([...products[category].data]);
        return sortedProducts.map((product) => (
       <Card item={product} key={product?.id}/>
      ));
    };
    return (
        <div className="">
          {/* Tab Navigation */}
          <div className="flex space-x-4 justify-center items-center mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={` font-Poppins font-bold text-2xl ${
              selectedTab === category ? 'border-b-pink-500 border-b-2 text-pink-500' : 'bg-gray-600'
            }`}
            onClick={() => setSelectedTab(category)}
          >
            {category}
          </button>
        ))}
            </div>
            <div className="flex justify-end font-Poppins font-semibold space-x-4 mb-6">
            <select
          value={sortOption}
          onChange={handleSortChange}
          className="border p-2 rounded-md w-[300px] outline-pink-500"
        >
          <option value="default">Default</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="nameAZ">Name: A-Z</option>
          <option value="nameZA">Name: Z-A</option>
        </select>
      </div>
    
          {/* Product Grid */}
          <div className="flex flex-wrap justify-between ">
          {renderProducts(selectedTab)}
          </div>
        </div>
      );
    };
export default function Products() {
    const sareeData = useSelector(state => state.Reducers.products)
  return (
    <div className="min-h-screen w-[90%] flex flex-col items-center self-center">
      <h1 className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 inline-block pb-5 text-transparent uppercase bg-clip-text font-Poppins text-center font-bold text-2xl">Product Showcase</h1>
      <ProductTab products={sareeData} />
    </div>
  )
}
