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
		<div
			className="w-36 h-36 bg-gray-100 rounded-full overflow-hidden cursor-pointer transition-transform duration-300 group-hover:scale-110"
			aria-label={title}
		>
			<Image
				src={imageSrc}
				alt={title}
				width={112}
				height={112}
				className="w-full h-full object-cover object-center rounded-full"
				priority
			/>
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
			<h1 className="mt-2 text-base font-medium">
				{title}
			</h1>
		</div>
	);
};

export default Circle;
