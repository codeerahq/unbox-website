"use client";

import React from "react";
import Slider from "react-slick";
import Circle from "./mini-components/Circle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
		{
			imageSrc: "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg",
			title: "Mountains",
			link: "/mountains"
		},
		{
			imageSrc: "https://images.pexels.com/photos/2832039/pexels-photo-2832039.jpeg",
			title: "Desert",
			link: "/desert"
		},
		{
			imageSrc: "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg",
			title: "Islands",
			link: "/islands"
		}
	];

	// Optimized Slider settings for better visual presentation
	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 600,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false, // Disabled for better user control
		centerMode: true,
		centerPadding: '60px',
		focusOnSelect: true,
		draggable: true,
		swipeToSlide: true,
		touchMove: true,
		arrows: false,
		variableWidth: false,
		responsive: [
			{
				breakpoint: 1536,
				settings: {
					slidesToShow: 5,
					centerPadding: '80px',
				}
			},
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 4,
					centerPadding: '60px',
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					centerPadding: '40px',
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					centerPadding: '30px',
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					centerPadding: '60px',
				}
			}
		]
	};

	return (
		<section className="relative py-32 px-6 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 overflow-hidden">
			{/* More Visible Background Elements */}
			<div className="absolute inset-0 opacity-[0.12]">
				<div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
				<div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full blur-2xl animate-pulse delay-500"></div>
			</div>

			{/* Enhanced Floating decorative elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-32 left-16 w-3 h-3 bg-blue-500 rounded-full animate-pulse opacity-60"></div>
				<div className="absolute top-64 right-24 w-2 h-2 bg-purple-500 rounded-full animate-ping opacity-70"></div>
				<div className="absolute bottom-48 left-32 w-4 h-4 bg-emerald-400 rounded-full animate-bounce opacity-50"></div>
				<div className="absolute top-1/3 right-1/4 w-2.5 h-2.5 bg-rose-500 rounded-full animate-pulse delay-700 opacity-80"></div>
				<div className="absolute bottom-32 right-32 w-3 h-3 bg-cyan-400 rounded-full animate-float opacity-60"></div>
				<div className="absolute top-48 left-1/3 w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-1000 opacity-70"></div>
			</div>

			{/* Animated travel paths */}
			<div className="absolute inset-0 opacity-8">
				<div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></div>
				<div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-300/40 to-transparent"></div>
				<div className="absolute top-1/2 left-0 w-full flex justify-center">
					<div className="flex space-x-12 opacity-40">
						{[...Array(8)].map((_, i) => (
							<div key={i} className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse" style={{animationDelay: `${i * 300}ms`}}></div>
						))}
					</div>
				</div>
			</div>

			<div className="relative max-w-7xl mx-auto">
				{/* Enhanced Header with more attractive design */}
				<div className="text-center mb-32">
					<div className="inline-flex items-center gap-4 mb-10 px-8 py-4 bg-white/70 backdrop-blur-md rounded-full border border-blue-200/60 shadow-xl">
						<div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full animate-pulse"></div>
						<span className="text-blue-700 text-sm font-semibold tracking-[0.4em] uppercase">
							Discover Your Passion
						</span>
						<div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse delay-500"></div>
					</div>
					<h2 className="text-6xl md:text-8xl font-extralight text-gray-900 mb-10 tracking-tight leading-tight">
						Plan by <span className="font-light italic bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">Interest</span>
					</h2>
					<p className="text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-light mb-12">
						Choose your adventure based on what makes your 
						<span className="text-blue-600 font-semibold"> heart race </span>
						and your
						<span className="text-purple-600 font-semibold"> soul ignite</span>
					</p>
					<div className="flex items-center justify-center gap-6">
						<div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
						<div className="relative">
							<div className="w-4 h-4 border-2 border-blue-500 rounded-full"></div>
							<div className="absolute inset-0 w-4 h-4 border-2 border-blue-500 rounded-full animate-ping"></div>
						</div>
						<div className="w-20 h-[3px] bg-gradient-to-l from-transparent via-blue-400 to-transparent rounded-full"></div>
					</div>
				</div>

				{/* Premium Draggable Slider */}
				<div className="relative px-4">
					{/* Slider container with enhanced styling */}
					<div className="interest-slider relative">
						<Slider {...sliderSettings}>
							{circleData.map((item, index) => (
								<div key={index} className="px-3">
									<div className="relative group cursor-pointer">
										{/* Elegant container */}
										<div className="flex flex-col items-center space-y-6 py-8">
											{/* Circle with enhanced effects */}
											<div className="relative">
												{/* Outer glow ring */}
												<div className="absolute -inset-6 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-emerald-500/0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
												
												{/* Main circle wrapper */}
												<div className="relative transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
													<Circle 
														imageSrc={item.imageSrc}
														title={item.title}
														link={item.link}
													/>
												</div>

												{/* Subtle sparkle effects */}
												<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
													<div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
													<div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse delay-300"></div>
												</div>
											</div>

											{/* Elegant title */}
											<div className="text-center">
												<h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 tracking-wide">
													{item.title}
												</h3>
												<div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
											</div>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>

					{/* Enhanced instruction text */}
					<div className="text-center mt-16 space-y-4">
						<div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/60 shadow-sm">
							<div className="flex gap-1">
								<div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
								<div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-200"></div>
								<div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse delay-400"></div>
							</div>
							<span className="text-gray-600 text-sm font-medium">
								Drag to explore • Click to discover
							</span>
							<div className="flex gap-1">
								<div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></div>
								<div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-200"></div>
								<div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-400"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Premium CSS styling for the slider */}
			<style jsx global>{`
				/* Enhanced Slider Container */}
				.interest-slider .slick-list {
					padding: 20px 0 !important;
					overflow: visible !important;
				}

				.interest-slider .slick-track {
					display: flex !important;
					align-items: center !important;
				}

				.interest-slider .slick-slide {
					opacity: 0.7 !important;
					transform: scale(0.9) !important;
					transition: all 0.3s ease !important;
				}

				.interest-slider .slick-slide.slick-center {
					opacity: 1 !important;
					transform: scale(1) !important;
				}

				.interest-slider .slick-slide.slick-center + .slick-slide,
				.interest-slider .slick-slide.slick-center .slick-slide:nth-child(-1) {
					opacity: 0.85 !important;
					transform: scale(0.95) !important;
				}

				/* Beautiful Dots */}
				.interest-slider .slick-dots {
					bottom: -40px !important;
					display: flex !important;
					justify-content: center !important;
					gap: 8px !important;
				}

				.interest-slider .slick-dots li {
					width: auto !important;
					height: auto !important;
					margin: 0 !important;
					margin-left: 8px !important;
				}

				.interest-slider .slick-dots li button {
					width: 8px !important;
					height: 8px !important;
					border-radius: 50% !important;
					border: none !important;
					background: rgb(203 213 225) !important;
					transition: all 0.3s ease !important;
					opacity: 1 !important;
					// display: none
				}

				.interest-slider .slick-dots li button:before {
					display: none !important;
				}

				.interest-slider .slick-dots li.slick-active button {
					background: linear-gradient(135deg, rgb(59 130 246), rgb(147 51 234)) !important;
					width: 24px !important;
					border-radius: 12px !important;
					transform: scale(1.2) !important;
				}

				.interest-slider .slick-dots li button:hover {
					background: rgb(156 163 175) !important;
					transform: scale(1.1) !important;
				}

				/* Remove default focus styles */}
				.interest-slider .slick-slide:focus {
					outline: none !important;
				}

				.interest-slider .slick-dots li button:focus {
					outline: none !important;
				}
			`}</style>
		</section>
	);
};

export default PlanByInterest;
