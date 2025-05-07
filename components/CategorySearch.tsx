import React from 'react'
import CategoryProductCard from './CategoryProductCard';

const products = [
    {  
        title: (
            <>
              Get proof of delivery with <br/> Hikvision
            </>
          ), 
        price: 500000, 
        vat: 5000, 
        image: '/camera1.jpg' 
    },
    {  
        title: (
            <>
              Get proof of delivery with <br/> Hikvision
            </>
          ), 
        price: 500000, 
        vat: 5000, 
        image: '/camera1.jpg' 
    },
    {  
        title: (
            <>
              Get proof of delivery with <br/> Hikvision
            </>
          ), 
        price: 500000, 
        vat: 5000, 
        image: '/camera1.jpg' 
    },
    {  
        title: (
            <>
              Get proof of delivery with <br/> Hikvision
            </>
          ), 
        price: 500000, 
        vat: 5000, 
        image: '/camera1.jpg' 
    },
    {  
        title: (
            <>
              Get proof of delivery with <br/> Hikvision
            </>
          ), 
        price: 500000, 
        vat: 5000, 
        image: '/camera1.jpg' 
    },
    {  
        title: (
            <>
              Get proof of delivery with <br/> Hikvision
            </>
          ), 
        price: 500000, 
        vat: 5000, 
        image: '/camera1.jpg' 
    },
    
];

const CategorySearch = () => {
  return (
    <div className="p-2 w-[90%] md:w-[90%] mx-auto">
        <div className="flex justify-end items-center px-4 mb-2">
            <select className=" p-2 mr-4">
                <option>Default</option>
            </select>
            <select className=" p-2">
                <option>15</option>
            </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 space-y-6">
            {products.map((product, idx) => (
                <CategoryProductCard key={idx} {...product} />
            ))}
        </div>
        <div className="text-center my-6">
            <button className="bg-[#7D0101] text-white px-6 py-2 rounded">Load more</button>
        </div>
    </div>
  );
};

export default CategorySearch;