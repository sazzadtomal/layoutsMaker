import React from 'react'
import Header from '../Header/Header'
import ProductCard from  "../ProductCard/ProductCard"
import FilterHolder from "../Filter/FilterHolder"
import FilterItem from "../FilterItem/FilterItem"



const ProductsWithFilter = () => {
  return (
    <section className='flex h-full w-full gap-2 '>
          <FilterHolder>
             <FilterItem/>
      </FilterHolder>
    <div className='h-full w-0.5 bg-gray-200'></div>
          
    <main className='flex flex-col w-full mt-4' >
           <Header/>
           <div className='flex flex-wrap p-4 mt-4'>        
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
           </div>
         </main>
    </section>
  )
}

export default ProductsWithFilter