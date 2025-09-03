"use client";

import React from "react";
import Circle from "./mini-components/Circle";

const PlanByInterest = () => {
	const circleData = [
		{
			imageSrc:
				"https://images.pexels.com/photos/13979893/pexels-photo-13979893.jpeg",
			title: "Circle Title",
			link: "https://www.example.com"
		},
		{
			imageSrc:
				"https://images.pexels.com/photos/13979893/pexels-photo-13979893.jpeg",
			title: "Circle Title",
			link: "https://www.example.com"
		},
		{
			imageSrc:
				"https://images.pexels.com/photos/13979893/pexels-photo-13979893.jpeg",
			title: "Circle Title",
			link: "https://www.example.com"
		},
		{
			imageSrc:
				"https://images.pexels.com/photos/13979893/pexels-photo-13979893.jpeg",
			title: "Circle Title",
			link: "https://www.example.com"
		},
		{
			imageSrc:
				"https://images.pexels.com/photos/13979893/pexels-photo-13979893.jpeg",
			title: "Circle Title",
			link: "https://www.example.com"
		},
		{
			imageSrc:
				"https://images.pexels.com/photos/13979893/pexels-photo-13979893.jpeg",
			title: "Circle Title",
			link: "https://www.example.com"
		},
		{
			imageSrc:
				"https://images.pexels.com/photos/13979893/pexels-photo-13979893.jpeg",
			title: "Circle Title",
			link: "https://www.example.com"
		},
	];

	return (
		<div className="w-full py-20 bg-[#FFFFFF] flex flex-col items-center justify-center">
			<div className="elem-01">
				<h1 className="text-4xl font-semibold text-center tracking-tight">
					<em>Plan By Interest</em>
				</h1>
				<p className="text-lg text-gray-600 mt-4 font-semibold text-center tracking-tight">
					Explore destinations based on your mood and preferences.
				</p>
			</div>
			<div className="elem-02 mt-10 flex gap-20">
				{circleData.map((circle, index) => (
					<Circle
						key={index}
						imageSrc={circle.imageSrc}
						title={circle.title}
						link={circle.link}
					/>
				))}
			</div>
		</div>
	);
};

export default PlanByInterest;
