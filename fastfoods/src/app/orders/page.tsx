import React from 'react'

const Orders = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40'>
      <table className='w-full border-separate border-spacing-3'>
        <thead>
          <tr className='text-left'>
            <th className='hidden md:block'>Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='hidden md:block py-6 px-1'>134356</td>
            <td className='py-6 px-1'>13-43-56</td>
            <td className='py-6 px-1'>12.50</td>
            <td className='hidden md:block py-6 px-1'>Coca-cola, 1burger, 2pizzas</td>
            <td className='py-6 px-1'>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Orders
