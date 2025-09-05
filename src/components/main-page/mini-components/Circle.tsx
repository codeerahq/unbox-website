"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CircleProps {
	imageSrc: string | StaticImageData;
	title: string;
	link?: string;
}

const Circle: React.FC<CircleProps> = ({ imageSrc, title, link }) => {
	const content = (
		<div className="relative group">
			{/* Outer glow effect */}
			<div className="absolute inset-0 w-36 h-36 bg-gradient-to-br from-blue-200/20 via-purple-200/20 to-pink-200/20 rounded-full scale-0 group-hover:scale-125 transition-all duration-700 ease-out blur-xl opacity-0 group-hover:opacity-100"></div>
			
			{/* Main circle container */}
			<div className="relative w-36 h-36 bg-white rounded-full overflow-hidden cursor-pointer shadow-lg group-hover:shadow-2xl transition-all duration-500 ease-out border-4 border-white group-hover:border-gray-50 group-hover:scale-95">
				{/* Image with zoom effect */}
				<div className="w-full h-full overflow-hidden rounded-full">
					<Image
						src={imageSrc}
						alt={title}
						width={144}
						height={144}
						className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-125"
						priority
					/>
				</div>
				
				{/* Overlay effect on hover */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
				
				{/* Subtle shine effect */}
				<div className="absolute top-2 left-2 w-8 h-8 bg-white/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
			</div>
		</div>
	);

	return (
		<div className="circle-container flex flex-col items-center group">
			{link ? (
				<Link href={link} passHref>
					{content}
				</Link>
			) : (
				content
			)}
			{title && (
				<h1 className="mt-4 text-sm font-medium transition-all duration-500 group-hover:scale-110 group-hover:text-gray-900 text-gray-600 group-hover:font-semibold tracking-wide">
					{title}
				</h1>
			)}
		</div>
	);
};

export default Circle;
