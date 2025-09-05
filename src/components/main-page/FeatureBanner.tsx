"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Banner data - you can configure this
// To show only one banner, keep only one item in the array
// To show multiple banners with carousel, add multiple items
const banners = [
	{
		id: 1,
		image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
		alt: "Kashmir Valley Package"
	},
	{
		id: 2,
		image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
		alt: "Dubai Adventure Package"
	}
];

const FeatureBanner = () => {

	const settings = {
		dots: false,
		infinite: banners.length > 1,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: banners.length > 1,
		autoplaySpeed: 4000,
		pauseOnHover: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					autoplaySpeed: 3000,
				}
			}
		]
	};

	// If only one banner, render without slider
	if (banners.length === 1) {
		return (
			<section className="relative w-full overflow-hidden">
				{/* Background Animation */}
				<div className="absolute inset-0 opacity-10 pointer-events-none">
					<div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl animate-pulse"></div>
					<div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
					<div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-400 rounded-full blur-2xl animate-bounce animation-delay-500"></div>
				</div>

				<div className="relative h-64 md:h-80 lg:h-96 w-full shadow-2xl">
					<Image
						src={banners[0].image}
						alt={banners[0].alt}
						fill
						className="object-cover"
						sizes="100vw"
						priority
					/>
					{/* Gradient Overlay */}
					<div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
				</div>
			</section>
		);
	}

	// Multiple banners with slider
	return (
		<section className="relative w-full overflow-hidden">
			{/* Background Animation */}
			<div className="absolute inset-0 opacity-10 pointer-events-none z-10">
				<div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
				<div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-400 rounded-full blur-2xl animate-bounce animation-delay-500"></div>
				<div className="absolute top-1/4 right-1/4 w-28 h-28 bg-gradient-to-br from-yellow-400 to-red-400 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
			</div>

			<div className="relative shadow-2xl">
				<Slider {...settings}>
					{banners.map((banner) => (
						<div key={banner.id} className="relative h-64 md:h-80 lg:h-96 w-full outline-none">
							<Image
								src={banner.image}
								alt={banner.alt}
								fill
								className="object-cover"
								sizes="100vw"
								priority={banner.id === 1}
							/>
							{/* Gradient Overlay */}
							<div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
						</div>
					))}
				</Slider>
			</div>

			{/* Additional floating animation elements */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				<div className="absolute top-10 left-10 w-2 h-2 bg-white/30 rounded-full animate-ping animation-delay-500"></div>
				<div className="absolute top-20 right-20 w-3 h-3 bg-white/20 rounded-full animate-ping animation-delay-1500"></div>
				<div className="absolute bottom-20 left-20 w-2 h-2 bg-white/25 rounded-full animate-ping animation-delay-2500"></div>
			</div>
		</section>
	);
};

export default FeatureBanner;
