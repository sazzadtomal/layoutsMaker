import React from 'react'

const Container = ({children}) => {
  return (
    <section className="w-full xl:w-5/6 mx-0 md:mx-auto flex-grow bg-slate-400 mt-4">
      <main className='bg-white px-4 py-6 h-full' >
           {children}
        </main>
       </section>
  )
}

export default Container