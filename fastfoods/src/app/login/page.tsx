/** @format */

import Image from "next/image";
import React from "react";
import Link from "next/link";

const Login = () => {
	return (
		<div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
			{/* Box */}
			<div className="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full">
				{/* Image Container */}
				<div className="relative h-1/3 w-full md:h-full md:w-1/2">
					<Image src="/loginBg.png" alt="login_img" fill className="object-cover"/>
				</div>
				{/* Form Container */}
				<div className="p-10 flex flex-col gap-8 md:w-1/2 lg:w-[60%] 2xl:w-1/2">
					<h1 className="font-bold text-xl lg:text-3xl">Welcome</h1>
					<p>
						Log in to your account or create a new one using social
						buttons
					</p>
					<button className="flex gap-4 items-center ring-1 ring-orange-100 p-4 rounded-md">
						<Image src="/google.png" alt="" width={20} height={20} className="object-contain" />
						<span>Sign in with Google</span>
					</button>
					<button className="flex gap-4 items-center ring-1 ring-blue-100 p-4 rounded-md">
						<Image src="/facebook.png" alt="" width={20} height={20} className="object-contain"/>
						<span>Sign in with Facebook</span>
          </button>
          <p className="text-sm">Have a problem? <Link href="/" className="underline">Contact us</Link></p>
				</div>
			</div>
		</div>
	)
}

export default Login
