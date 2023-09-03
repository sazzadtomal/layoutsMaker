import React from 'react'
import Header from '../Header/Header'

const Products = () => {
  return (
    <section className='flex h-full w-full'>
         <section className='xl:w-1/6 w-1/3 bg-yellow-100'>Filter</section>
          <main className='bg-green-200 flex flex-col flex-grow' >
           <Header/>
           <div className='flex flex-wrap p-4'>
              <div className='h-48 basis-1/3 p-2 pb-4 border '>
                 <div className='w-full h-full bg-white'></div>
              </div>
         </div>
         </main>
    </section>
  )
}

export default Products