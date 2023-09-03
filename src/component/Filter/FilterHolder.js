import React from 'react'

import { useState } from 'react'

const FilterHolder = ({children}) => {

  const [filter, setFilter]=useState(true)


  return (
    filter ? <section  className='w-0 xl:w-1/6 md:w-1/3'>
    <div className='bg-white w-full h-full p-4'>
        <div className='flex justify-between items-center mb-16' >
          <h2 className='text-2xl mb-2'>Filter</h2>
          <button onClick={()=>setFilter(prev=>setFilter(false))}>{"<"}</button>
        </div>
         <div className='flex flex-col  max-h-fit h-1/3'>
           {children}
         </div>

    </div>
   
   </section>:<div onClick={()=>setFilter(prev=>setFilter(true))}  className='text-3xl'>{">"}</div>
  )
}

export default FilterHolder