import Image from 'next/image'
import React from 'react'
import Countdown from './Countdown'

const Offer = () => {
  return (
      <div className='bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url("/offerBg.png")] md:h-[70vh]'>
          {/* Text container */}
          <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6'>
              <h1 className='text-5xl font-bold xl:text-6xl text-white'>Delicious Burger & French Fries</h1>
              <p className='text-white xl:text-xl'>Progressively simplify e-toilers and process-centric methods of empowerment. Quickly pontificate parallel</p>
              <Countdown />
              <button className='bg-red-500 text-white rounded-md py-3 px-6'>Order Now</button>
          </div>
          {/* Image Container */}
          <div className='relative flex-1 w-full md:h-full'>
              <Image src="/offerProduct.png" alt="" fill className='object-contain' />
          </div>
      
    </div>
  )
}

export default Offer
