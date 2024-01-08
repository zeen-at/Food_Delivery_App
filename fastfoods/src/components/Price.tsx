"use client";

import React, { useEffect, useState } from "react"

type Props = {
	id: number
	price: number
	options?: { title: string; additionalPrice: number }[]
}

const Price = ({ price, id, options }: Props) => {

    const [total, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [selectedItem, setSelectedItem] = useState(0);

    useEffect(() => {
        setTotal(quantity * (options ? price + options[selectedItem].additionalPrice : price))
    }, [selectedItem, quantity, options, price])

	return (
		<div className="flex flex-col gap-4">
			<h2 className="font-bold text-2xl">${total.toFixed(2)}</h2>
			{/* Options container */}
			<div className="flex gap-4">
				{options?.map((option, index) => (
                    <button key={option.title} className="ring-1 rounded-md p-2 ring-red-400 min-w-[6rem]"
                        style={{
                            backgroundColor: selectedItem === index ? "rgb(248 113 113)" : "white",
                            color: selectedItem === index ?  "white" :  "red" 
                        }}
                        onClick={() => setSelectedItem(index)}
                    >{option.title}</button>
				))}
			</div>
			{/* Quantity container */}
			<div className="flex justify-between items-center ring-1 ring-red-400">
				<div className="flex justify-between w-full p-3">
					<span>Quantity</span>
					<div className="flex gap-4 items-center">
                        <button type="button" onClick={() => setQuantity((prev) => prev > 1 ? prev -1 : 1) }>{"<"}</button>
                        <span>{quantity}</span>
						<button type="button" onClick={() => setQuantity((prev) => prev < 9 ? prev + 1 : 9)}>{">"}</button>
					</div>
				</div>
				{/* Cart button */}
				<button className="uppercase bg-red-500 text-white p-3 ring-1 ring-red-500 w-56">Add to Cart</button>
			</div>
		</div>
	)
}

export default Price
