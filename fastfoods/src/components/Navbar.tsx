import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import CartIcon from './CartIcon';
import Menu from './Menu'

const Navbar = () => {
  const user = false;
  return (
    <div className='h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40'>
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href="/">Massimo</Link>
      </div>
      <div className='md:hidden'>
        <Menu />
      </div>
      <div className='hidden md:flex gap-4 items-center flex-1'>
        <div className='flex justify-end gap-2 items-center cursor-pointer bg-orange-200 px-1 rounded-md lg:static md:absolute top-3 r-2'>
          <Image src="/phone.png" alt="phone_icon" width={20} height={20} />
          <span>814-270-7788</span>
        </div>
        {
          user ? (
            <Link href="/">Login</Link>
          ) : (
            <Link href="/orders">Orders</Link>
          )
        }
        <Link href="/cart"><CartIcon /></Link>
      </div>
    </div>
  )
}

export default Navbar
