/** @format */

"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import CartIcon from "./CartIcon"

const links = [
	{ id: 1, url: "/", title: "Homepage" },
	{ id: 2, url: "/menu", title: "Menu" },
	{ id: 3, url: "/hours", title: "Working Hours" },
	{ id: 4, url: "/contact", title: "Contact" },
]
const Menu = () => {
	const [isOpen, setisOpen] = useState(false)

	const user = false
	return (
		<div>
			{isOpen ? (
				<Image
					src="/close.png"
					alt="menu_icon"
					width={20}
					height={20}
					onClick={() => setisOpen(false)}
				/>
			) : (
				<Image
					src="/open.png"
					alt="menu_icon"
					width={20}
					height={20}
					onClick={() => setisOpen(true)}
				/>
			)}
			{isOpen && (
				<div className="bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] flex flex-col w-full gap-8 z-10 items-center justify-center">
					{links.map((item) => (
						<Link
							key={item.id}
							href={item.url}
							onClick={() => setisOpen(false)}
						>
							{item.title}
						</Link>
					))}
					{user ? (
						<Link href="/orders" onClick={() => setisOpen(false)}>
							Orders
						</Link>
					) : (
						<>
							<Link
								href="/login"
								onClick={() => setisOpen(false)}
							>
								Login
							</Link>
						</>
					)}

					<Link href="/cart" onClick={() => setisOpen(false)}>
						<CartIcon />
					</Link>
				</div>
			)}
		</div>
	)
}

export default Menu
