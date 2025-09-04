"use client";

import React from "react";
import Circle from "./mini-components/Circle";

const PlanByInterest = () => {
	const circleData = [
		{
			imageSrc: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg",
			title: "Adventure",
			link: "/adventure"
		},
		{
			imageSrc: "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg",
			title: "Culture",
			link: "/culture"
		},
		{
			imageSrc: "https://images.pexels.com/photos/1430676/pexels-photo-1430676.jpeg",
			title: "Nature",
			link: "/nature"
		},
		{
			imageSrc: "https://images.pexels.com/photos/2956954/pexels-photo-2956954.jpeg",
			title: "Food",
			link: "/food"
		},
		{
			imageSrc: "https://images.pexels.com/photos/1834386/pexels-photo-1834386.jpeg",
			title: "Beach",
			link: "/beach"
		},
		{
			imageSrc: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg",
			title: "City",
			link: "/city"
		},
		{
			imageSrc: "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg",
			title: "Wellness",
			link: "/wellness"
		},
	];

	return (
		<section className="relative py-32 px-6 bg-gradient-to-br from-gray-50 via-white to-slate-50 overflow-hidden">
			{/* Enhanced Background Elements */}
			<div className="absolute inset-0 opacity-[0.03]">
				<div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-emerald-300 to-cyan-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
				<div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-br from-rose-300 to-pink-400 rounded-full blur-2xl animate-pulse delay-500"></div>
			</div>

			{/* Floating decorative elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-32 left-16 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-40"></div>
				<div className="absolute top-64 right-24 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-50"></div>
				<div className="absolute bottom-48 left-32 w-3 h-3 bg-emerald-300 rounded-full animate-bounce opacity-30"></div>
				<div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-rose-400 rounded-full animate-pulse delay-700 opacity-60"></div>
			</div>

			<div className="relative max-w-7xl mx-auto">
				{/* Enhanced Header */}
				<div className="text-center mb-24">
					<div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
						<div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full animate-pulse"></div>
						<span className="text-gray-600 text-sm font-medium tracking-[0.3em] uppercase">
							Discover Your Style
						</span>
						<div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse delay-500"></div>
					</div>
					<h2 className="text-6xl md:text-8xl font-light text-gray-900 mb-8 tracking-tight leading-tight">
						Plan by <span className="font-extralight italic bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">Interest</span>
					</h2>
					<p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-8">
						Choose your adventure based on what makes your 
						<span className="text-gray-900 font-medium"> heart race</span>
					</p>
					<div className="flex items-center justify-center gap-4">
						<div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-gray-300"></div>
						<div className="w-3 h-3 border-2 border-gray-300 rounded-full"></div>
						<div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-gray-300"></div>
					</div>
				</div>

				{/* Enhanced Circles Grid */}
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-16 justify-items-center mb-24">
					{circleData.map((circle, index) => (
						<div 
							key={index} 
							className="group transform hover:-translate-y-3 transition-all duration-700 ease-out"
							style={{
								animationDelay: `${index * 150}ms`
							}}
						>
							<div className="relative">
								{/* Enhanced shadow effect */}
								<div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 via-blue-900/5 to-purple-900/5 rounded-full opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-150 transition-all duration-700 blur-xl"></div>
								
								{/* Ripple effect */}
								<div className="absolute inset-0 border-2 border-gray-300/20 rounded-full opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-150 transition-all duration-1000 ease-out"></div>
								<div className="absolute inset-0 border border-gray-400/10 rounded-full opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-[1.8] transition-all duration-1200 ease-out delay-100"></div>
								
								<Circle
									imageSrc={circle.imageSrc}
									title={circle.title}
									link={circle.link}
								/>
							</div>
						</div>
					))}
				</div>

				{/* Enhanced Bottom CTA */}
				<div className="text-center space-y-8">
					<p className="text-gray-500 text-xl mb-8 font-light tracking-wide">
						Can&apos;t decide? Let us create a 
						<span className="text-gray-900 font-medium"> perfect mix </span>
						for you
					</p>
					<div className="relative inline-block">
						<button className="group relative bg-white border-2 border-gray-200 text-gray-900 px-16 py-5 rounded-full font-medium text-lg hover:bg-gray-50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:border-gray-300 overflow-hidden">
							<span className="relative z-10 transition-colors duration-300 group-hover:text-gray-800">Surprise Me</span>
							
							{/* Animated background */}
							<div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
							
							{/* Shimmer effect */}
							<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200"></div>
						</button>
						
						{/* Button glow */}
						<div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl scale-110 transition-all duration-500"></div>
					</div>
				</div>

				{/* Enhanced Decorative Elements */}
				<div className="absolute top-1/4 left-8 w-2 h-2 bg-blue-300 rounded-full opacity-40 animate-pulse"></div>
				<div className="absolute top-3/4 right-8 w-3 h-3 bg-purple-200 rounded-full opacity-50 animate-bounce"></div>
				<div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-emerald-400 rounded-full opacity-60 animate-ping"></div>
				<div className="absolute top-1/3 right-1/3 w-2 h-2 bg-rose-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
			</div>
		</section>
	);
};

export default PlanByInterest;
