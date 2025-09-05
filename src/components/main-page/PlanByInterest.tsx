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

	// Slider settings
	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 600,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		pauseOnHover: true,
		centerMode: true,
		centerPadding: '20px',
		focusOnSelect: true,
		draggable: true,
		swipeToSlide: true,
		touchMove: true,
		arrows: false,
		variableWidth: false,
		adaptiveHeight: false,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 4,
					centerPadding: '40px',
					variableWidth: false,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					centerPadding: '30px',
					variableWidth: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerPadding: '20px',
					variableWidth: false,
					centerMode: false,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					centerPadding: '10px',
					variableWidth: false,
					centerMode: false,
				}
			}
		]
	};

	return (
		<section className="relative py-16 px-4 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
			</div>

			<div className="relative max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/70 backdrop-blur-md rounded-full border border-blue-200/60 shadow-lg">
						<div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full animate-pulse"></div>
						<span className="text-blue-700 text-sm font-semibold tracking-wider uppercase">
							Discover Your Passion
						</span>
						<div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse delay-500"></div>
					</div>
					<h2 className="text-4xl md:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
						Plan by <span className="font-light italic bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">Interest</span>
					</h2>
					<p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-light mb-8">
						Choose your adventure based on what makes your 
						<span className="text-blue-600 font-semibold"> heart race </span>
						and your <span className="text-purple-600 font-semibold"> soul ignite</span>
					</p>
				</div>

				{/* Slider */}
				<div className="relative px-4">
					<div className="interest-slider relative">
						<Slider {...sliderSettings}>
							{circleData.map((item, index) => (
								<div key={index} className="focus:outline-none">
									<div className="w-full h-[320px] flex flex-col items-center justify-center px-2">
										{/* Circle Container - Fixed Size */}
										<div className="w-36 h-36 flex items-center justify-center mb-6 flex-shrink-0">
											<div className="group relative cursor-pointer">
												{/* Background Glow Effect */}
												<div className="absolute inset-0 w-36 h-36 bg-gradient-to-br from-blue-200/20 via-purple-200/20 to-pink-200/20 rounded-full scale-0 group-hover:scale-125 transition-all duration-700 ease-out blur-xl opacity-0 group-hover:opacity-100"></div>
												
												{/* Main Circle */}
												<div className="relative w-36 h-36 bg-white rounded-full overflow-hidden cursor-pointer shadow-lg group-hover:shadow-2xl transition-all duration-500 ease-out border-4 border-white group-hover:border-gray-50 group-hover:scale-95">
													<div className="w-full h-full overflow-hidden rounded-full">
														<img
															src={item.imageSrc}
															alt={item.title}
															className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-125"
														/>
													</div>
													
													{/* Overlay Effect */}
													<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
													
													{/* Shine Effect */}
													<div className="absolute top-2 left-2 w-8 h-8 bg-white/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
												</div>
											</div>
										</div>
										
										{/* Title Container - Fixed Size */}
										<div className="h-16 flex flex-col items-center justify-start w-full flex-shrink-0">
											<h3 className="text-lg font-semibold text-gray-800 text-center leading-tight">
												{item.title}
											</h3>
											<div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mt-2"></div>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>

			{/* Slider Styling */}
			<style jsx global>{`
				.interest-slider {
					width: 100%;
					max-width: 100%;
				}

				.interest-slider .slick-list {
					padding: 20px 0 60px 0 !important;
					overflow: visible !important;
					margin: 0 !important;
				}

				.interest-slider .slick-track {
					display: flex !important;
					align-items: center !important;
					height: 340px !important;
				}

				.interest-slider .slick-slide {
					opacity: 0.7 !important;
					transform: scale(0.9) !important;
					transition: all 0.4s ease !important;
					height: 320px !important;
					display: flex !important;
					align-items: center !important;
					justify-content: center !important;
				}

				.interest-slider .slick-slide > div {
					height: 320px !important;
					width: 100% !important;
					display: flex !important;
					align-items: center !important;
					justify-content: center !important;
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

				/* Mobile specific fixes */
				@media (max-width: 768px) {
					.interest-slider .slick-slide {
						opacity: 1 !important;
						transform: scale(1) !important;
						height: 280px !important;
					}
					
					.interest-slider .slick-slide > div {
						height: 280px !important;
					}

					.interest-slider .slick-track {
						height: 300px !important;
					}

					.interest-slider .slick-list {
						padding: 10px 0 40px 0 !important;
					}
				}

				.interest-slider .slick-dots {
					bottom: 0 !important;
					position: relative !important;
					display: flex !important;
					justify-content: center !important;
					gap: 8px !important;
					margin-top: 20px !important;
				}

				.interest-slider .slick-dots li {
					width: auto !important;
					height: auto !important;
					margin: 0 !important;
				}

				.interest-slider .slick-dots li button {
					width: 8px !important;
					height: 8px !important;
					border-radius: 50% !important;
					border: none !important;
					background: rgb(203 213 225) !important;
					transition: all 0.3s ease !important;
					opacity: 1 !important;
					padding: 0 !important;
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

				.interest-slider .slick-slide:focus,
				.interest-slider .slick-dots li button:focus {
					outline: none !important;
				}
			`}</style>
		</section>
	);
};

export default PlanByInterest;
