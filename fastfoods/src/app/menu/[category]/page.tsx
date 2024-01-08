import React from 'react'
import Image from 'next/image'
import { pizzas } from '@/data'
import Link from 'next/link'

const Page = () => {
  return (
    <div className='flex text-red-500 flex-wrap'>
      {pizzas.map((item) => (
        <Link href={`/product/${item.id}`} key={item.id} className="w-full h-[60vh] group sm:w-1/2 lg:w-1/3 border-r-2 border-b-2 border-red-500 p-4 flex flex-col justify-between even:bg-fuchsia-50">
          {/* Image Container */}
          {item.img && (
            <div className='relative h-[80%]'>
            <Image src={item.img} className='object-contain' alt="" fill />
            </div>
          )}
          {/* Text Container */}
          <div className='flex items-center justify-between font-bold '>
            <h1 className='text-2xl uppercase p-2'>{item.title}</h1>
            <h2 className='group-hover:hidden text-xl'>${item.price}</h2>
            <button className='uppercase group-hover:block bg-red-500 text-white p-2 rounded-md hidden'>Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Page
