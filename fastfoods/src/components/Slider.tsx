"use client";

import Image from 'next/image'
import React, { useState, useEffect } from 'react'


const data = [ 
    {
        id: 1,
        title: "Always fresh, Crispy and Hot",
        image: "/slide1.png"
    },
    {
        id: 2,
        title: "Fast Delivery, Whenever and Wherever",
        image: "/slide2.png"
    },
    {
        id: 3,
        title: "Best Pizza to share with family",
        image: "/slide3.jpg"
    },
]
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => prev === data.length - 1 ? 0 : prev + 1)
        }, 2000);
        return () => clearInterval(interval);
    }, [])

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
          <div className='flex-1 items-center justify-center flex flex-col gap-8 font-bold text-red-500 '>
              <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>{data[currentSlide].title}</h1>
              <button type="button" className='bg-red-500 text-white px-8 py-4'>Order Now</button>
          </div>
          <div className='flex-1 relative w-full '>
              <Image src={data[currentSlide].image} alt="" fill className='object-cover'/>
          </div>
    </div>
  )
}

export default Slider
