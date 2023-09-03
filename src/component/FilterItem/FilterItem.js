import React from 'react'
import { useState } from 'react'


const FilterItem = () => {

    const [view,setView]=useState(false)



  return (
      <div >
        <h3 onClick={()=>setView(prev=>!prev)} className='text-lg font-semibold border p-2 pb-4'>Brand</h3>
        {view ? <ul className='px-2 border border-collapse flex flex-col gap-1 py-2 ' >
            <li>Nokia</li>
            <li>Samsung</li>
            <li>Oppo</li>
            <li>Vivo</li>
            <li>Oneplus</li>

        </ul>:""}
      </div>
  )
}

export default FilterItem