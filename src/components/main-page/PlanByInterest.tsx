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

	// Mobile-optimized Slider settings with better laptop display
	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 600,
		slidesToShow: 5, // Default for large screens
		slidesToScroll: 1,
		autoplay: false,
		centerMode: true,
		centerPadding: '20px',
		focusOnSelect: true,
		draggable: true,
		swipeToSlide: true,
		touchMove: true,
		arrows: false,
		variableWidth: false,
		responsive: [
			{
				breakpoint: 1920, // Large desktop
				settings: {
					slidesToShow: 6,
					centerPadding: '40px',
				}
			},
			{
				breakpoint: 1536, // Large laptop
				settings: {
					slidesToShow: 5,
					centerPadding: '60px',
				}
			},
			{
				breakpoint: 1280, // Laptop
				settings: {
					slidesToShow: 4,
					centerPadding: '40px',
				}
			},
			{
				breakpoint: 1024, // Small laptop/Large tablet
				settings: {
					slidesToShow: 3,
					centerPadding: '30px',
				}
			},
			{
				breakpoint: 768, // Tablet
				settings: {
					slidesToShow: 1,
					centerPadding: '80px',
				}
			},
			{
				breakpoint: 640, // Large mobile
				settings: {
					slidesToShow: 1,
					centerPadding: '60px',
				}
			},
			{
				breakpoint: 480, // Mobile
				settings: {
					slidesToShow: 1,
					centerPadding: '40px',
				}
			}
		]
	};

	return (
		<section className="relative py-16 md:py-32 px-4 md:px-6 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 overflow-hidden">
			{/* More Visible Background Elements - Mobile Optimized */}
			<div className="absolute inset-0 opacity-[0.08] md:opacity-[0.12]">
				<div className="absolute top-10 md:top-20 left-10 md:left-20 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-2xl md:blur-3xl animate-pulse"></div>
				<div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-36 md:w-72 h-36 md:h-72 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full blur-2xl md:blur-3xl animate-pulse delay-1000"></div>
			</div>

			{/* Reduced decorative elements for mobile */}
			<div className="absolute inset-0 overflow-hidden hidden md:block">
				<div className="absolute top-32 left-16 w-3 h-3 bg-blue-500 rounded-full animate-pulse opacity-60"></div>
				<div className="absolute top-64 right-24 w-2 h-2 bg-purple-500 rounded-full animate-ping opacity-70"></div>
				<div className="absolute bottom-48 left-32 w-4 h-4 bg-emerald-400 rounded-full animate-bounce opacity-50"></div>
			</div>

			<div className="relative max-w-7xl mx-auto">
				{/* Mobile-Optimized Header */}
				<div className="text-center mb-16 md:mb-32">
					<div className="inline-flex items-center gap-2 md:gap-4 mb-6 md:mb-10 px-4 md:px-8 py-2 md:py-4 bg-white/70 backdrop-blur-md rounded-full border border-blue-200/60 shadow-xl">
						<div className="w-2 md:w-3 h-2 md:h-3 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full animate-pulse"></div>
						<span className="text-blue-700 text-xs md:text-sm font-semibold tracking-[0.2em] md:tracking-[0.4em] uppercase">
							Discover Your Passion
						</span>
						<div className="w-2 md:w-3 h-2 md:h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse delay-500"></div>
					</div>
					<h2 className="text-3xl md:text-6xl lg:text-8xl font-extralight text-gray-900 mb-6 md:mb-10 tracking-tight leading-tight px-4 md:px-0">
						Plan by <span className="font-light italic bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">Interest</span>
					</h2>
					<p className="text-lg md:text-2xl text-gray-700 max-w-3xl md:max-w-5xl mx-auto leading-relaxed font-light mb-8 md:mb-12 px-4 md:px-0">
						Choose your adventure based on what makes your 
						<span className="text-blue-600 font-semibold"> heart race </span>
						<span className="hidden md:inline">and your</span>
						<span className="text-purple-600 font-semibold md:inline block"> soul ignite</span>
					</p>
					<div className="flex items-center justify-center gap-3 md:gap-6">
						<div className="w-12 md:w-20 h-[2px] md:h-[3px] bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
						<div className="relative">
							<div className="w-3 md:w-4 h-3 md:h-4 border-2 border-blue-500 rounded-full"></div>
							<div className="absolute inset-0 w-3 md:w-4 h-3 md:h-4 border-2 border-blue-500 rounded-full animate-ping"></div>
						</div>
						<div className="w-12 md:w-20 h-[2px] md:h-[3px] bg-gradient-to-l from-transparent via-blue-400 to-transparent rounded-full"></div>
					</div>
				</div>

				{/* Mobile-Optimized Slider */}
				<div className="relative px-2 md:px-4">
					{/* Slider container with mobile-specific styling */}
					<div className="interest-slider relative">
						<Slider {...sliderSettings}>
							{circleData.map((item, index) => (
								<div key={index} className="px-1 md:px-3">
									<div className="relative group cursor-pointer">
										{/* Mobile-optimized container */}
										<div className="flex flex-col items-center space-y-3 md:space-y-6 py-4 md:py-8">
											{/* Circle with mobile-friendly effects */}
											<div className="relative">
												{/* Reduced glow for mobile */}
												<div className="absolute -inset-3 md:-inset-6 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-emerald-500/0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 blur-lg md:blur-xl"></div>
												
												{/* Circle wrapper with adjusted scaling */}
												<div className="relative transform transition-all duration-500 group-hover:scale-105 md:group-hover:scale-110 group-hover:-translate-y-1 md:group-hover:-translate-y-2">
													<Circle 
														imageSrc={item.imageSrc}
														title={item.title}
														link={item.link}
													/>
												</div>

												{/* Mobile-friendly sparkle effects */}
												<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
													<div className="absolute -top-1 -right-1 w-1.5 md:w-2 h-1.5 md:h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
													<div className="absolute -bottom-1 -left-1 w-1 md:w-1.5 h-1 md:h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse delay-300"></div>
												</div>
											</div>

											{/* Mobile-optimized title */}
											<div className="text-center">
												<h3 className="text-sm md:text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 tracking-wide">
													{item.title}
												</h3>
												<div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-1 md:mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
											</div>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>

					{/* Mobile-optimized instruction text */}
					<div className="text-center mt-8 md:mt-16 space-y-4">
						<div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/60 shadow-sm">
							<div className="flex gap-1">
								<div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
								<div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-200"></div>
								<div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse delay-400"></div>
							</div>
							<span className="text-gray-600 text-xs md:text-sm font-medium">
								<span className="hidden md:inline">Drag to explore • Click to discover</span>
								<span className="md:hidden">Swipe to explore</span>
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

			{/* Mobile-Enhanced CSS styling for the slider */}
			<style jsx global>{`
				/* Mobile-First Slider Container */}
				.interest-slider .slick-list {
					padding: 10px 0 !important;
					overflow: visible !important;
				}

				@media (min-width: 768px) {
					.interest-slider .slick-list {
						padding: 20px 0 !important;
					}
				}

				.interest-slider .slick-track {
					display: flex !important;
					align-items: center !important;
				}

				/* Mobile slide adjustments */}
				.interest-slider .slick-slide {
					opacity: 0.6 !important;
					transform: scale(0.85) !important;
					transition: all 0.3s ease !important;
				}

				@media (min-width: 768px) {
					.interest-slider .slick-slide {
						opacity: 0.7 !important;
						transform: scale(0.9) !important;
					}
				}

				.interest-slider .slick-slide.slick-center {
					opacity: 1 !important;
					transform: scale(1) !important;
				}

				.interest-slider .slick-slide.slick-center + .slick-slide,
				.interest-slider .slick-slide.slick-center .slick-slide:nth-child(-1) {
					opacity: 0.8 !important;
					transform: scale(0.9) !important;
				}

				@media (min-width: 768px) {
					.interest-slider .slick-slide.slick-center + .slick-slide,
					.interest-slider .slick-slide.slick-center .slick-slide:nth-child(-1) {
						opacity: 0.85 !important;
						transform: scale(0.95) !important;
					}
				}

				/* Mobile-optimized dots */}
				.interest-slider .slick-dots {
					bottom: -30px !important;
					display: flex !important;
					justify-content: center !important;
					gap: 6px !important;
					padding: 0 20px !important;
				}

				@media (min-width: 768px) {
					.interest-slider .slick-dots {
						bottom: -40px !important;
						gap: 8px !important;
						padding: 0 !important;
					}
				}

				.interest-slider .slick-dots li {
					width: auto !important;
					height: auto !important;
					margin: 0 !important;
				}

				.interest-slider .slick-dots li button {
					width: 6px !important;
					height: 6px !important;
					border-radius: 50% !important;
					border: none !important;
					background: rgb(203 213 225) !important;
					transition: all 0.3s ease !important;
					opacity: 1 !important;
					padding: 0 !important;
				}

				@media (min-width: 768px) {
					.interest-slider .slick-dots li button {
						width: 8px !important;
						height: 8px !important;
					}
				}

				.interest-slider .slick-dots li button:before {
					display: none !important;
				}

				.interest-slider .slick-dots li.slick-active button {
					background: linear-gradient(135deg, rgb(59 130 246), rgb(147 51 234)) !important;
					width: 18px !important;
					border-radius: 9px !important;
					transform: scale(1.1) !important;
				}

				@media (min-width: 768px) {
					.interest-slider .slick-dots li.slick-active button {
						width: 24px !important;
						border-radius: 12px !important;
						transform: scale(1.2) !important;
					}
				}

				.interest-slider .slick-dots li button:hover {
					background: rgb(156 163 175) !important;
					transform: scale(1.05) !important;
				}

				@media (min-width: 768px) {
					.interest-slider .slick-dots li button:hover {
						transform: scale(1.1) !important;
					}
				}

				/* Remove default focus styles */}
				.interest-slider .slick-slide:focus {
					outline: none !important;
				}

				.interest-slider .slick-dots li button:focus {
					outline: none !important;
				}

				/* Ensure proper spacing on mobile */}
				@media (max-width: 767px) {
					.interest-slider .slick-track {
						margin-left: 0 !important;
						margin-right: 0 !important;
					}
					
					.interest-slider .slick-slide {
						padding: 0 8px !important;
					}
				}
			`}</style>
		</section>
	);
};

export default PlanByInterest;
