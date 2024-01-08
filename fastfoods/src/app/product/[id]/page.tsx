import React from 'react';
import Image from 'next/image';
import { singleProduct } from '@/data';
import Price from '@/components/Price';

const SingleProduct = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center'>
      {/* Image container */}
      {singleProduct.img && (
        <div className='relative w-full h-1/2 md:h-[70%]'>
        <Image src={singleProduct.img} alt={singleProduct.title} fill className="object-contain" />
      </div>
      )}
      
      {/* Text Container */}
      <div className='h-1/2 flex flex-col gap-4 md:justify-center md:h-[70%] md:gap-6 xl:md-8'>
        <h1 className='text-3xl xl:text-5xl font-bold uppercase'>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options } />
      </div>
    </div>
  )
}

export default SingleProduct
