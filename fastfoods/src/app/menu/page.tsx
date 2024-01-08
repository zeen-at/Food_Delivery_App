/** @format */

import { menu } from "@/data"
import React from "react"
import Link from "next/link"

const Page = () => {
	return (
		<div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
			{menu.map((category) => (
				<Link href={`/menu/${category.slug}`} key={category.id} style={{ backgroundImage: `url(${category.img})`}}
        className="w-full h-1/3 bg-cover p-8 md:h-1/2">
					<div
						className={`text-${category.color} w-1/2`}
					>
						<h1 className="uppercase font-bold text-3xl">{category.title}</h1>
						<p className="text-sm my-4">{category.desc}</p>
            <button type="button" className={`hidden xl:block bg-${category.color} text-${category.color === "black" ? "white" : "red"} py-2 px-4 rounded-md`}>
							Explore
						</button>
					</div>
				</Link>
			))}
		</div>
	)
}

export default Page
