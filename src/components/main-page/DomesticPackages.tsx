"use client";

import React from "react";
import { Compass, Plane } from "lucide-react";
import Slider from "react-slick";
import PackageCard from "./PackageCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Domestic Packages Data
const domesticPackagesData = [
	{
		id: 1,
		title: "Spiti Valley",
		subtitle: "Cold Desert Adventure",
		price: "₹16,499",
		originalPrice: "₹20,999",
		image: "/api/placeholder/400/300", // Replace with actual image
		duration: "6 Days",
		groupSize: "8-12 People",
		location: "Himachal Pradesh",
		isPopular: true
	},
	{
		id: 2,
		title: "Uttarakhand",
		subtitle: "Mountain Retreat",
		price: "₹7,500",
		image: "/api/placeholder/400/300", // Replace with actual image
		duration: "4 Days",
		groupSize: "6-10 People",
		location: "Uttarakhand"
	},
	{
		id: 3,
		title: "Himachal",
		subtitle: "Hill Station Escape",
		price: "₹6,999",
		originalPrice: "₹9,999",
		image: "/api/placeholder/400/300", // Replace with actual image
		duration: "5 Days",
		groupSize: "4-8 People",
		location: "Himachal Pradesh"
	},
	{
		id: 4,
		title: "Kashmir",
		subtitle: "Paradise on Earth",
		price: "₹22,999",
		image: "/api/placeholder/400/300", // Replace with actual image
		duration: "7 Days",
		groupSize: "6-12 People",
		location: "Jammu & Kashmir",
		isPopular: true
	},
	{
		id: 5,
		title: "Ladakh",
		subtitle: "High Altitude Desert",
		price: "₹20,999",
		originalPrice: "₹25,999",
		image: "/api/placeholder/400/300", // Replace with actual image
		duration: "8 Days",
		groupSize: "4-10 People",
		location: "Ladakh"
	},
	{
		id: 6,
		title: "Rajasthan",
		subtitle: "Royal Heritage",
		price: "₹12,999",
		image: "/api/placeholder/400/300", // Replace with actual image
		duration: "6 Days",
		groupSize: "8-15 People",
		location: "Rajasthan"
	}
];

const DomesticPackages = () => {
	const handlePackageSelect = (id: number) => {
		console.log(`Selected package: ${id}`);
		// Add navigation logic here
        alert(`Navigation to package details page for package ID: ${id}`);
	};

	// Slider settings
	const sliderSettings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		arrows: false,
		swipeToSlide: true,
		touchMove: true,
		draggable: true,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 1280, // xl
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1024, // lg
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 768, // md
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '40px',
				}
			},
			{
				breakpoint: 640, // sm
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '20px',
				}
			}
		]
	};

	return (
		<section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
			{/* Custom Slider Styles */}
			<style jsx global>{`
				/* Hide default slick dots */
				.slick-carousel .slick-dots {
					display: none !important;
				}
				
				/* Prevent clicks during drag */
				.slick-track.slick-dragging {
					pointer-events: none !important;
				}
				
				.slick-track.slick-dragging * {
					pointer-events: none !important;
				}
				
				/* Custom dots styling */
				.slick-dots {
					position: relative !important;
					bottom: auto !important;
					display: flex !important;
					justify-content: center !important;
					align-items: center !important;
					gap: 8px !important;
					margin-top: 32px !important;
					list-style: none !important;
				}
				.slick-dots li {
					margin: 0 !important;
				}
				.slick-dots li button {
					width: 8px !important;
					height: 8px !important;
					border-radius: 50% !important;
					background-color: #d1d5db !important;
					border: none !important;
					padding: 0 !important;
					font-size: 0 !important;
					transition: all 0.2s ease !important;
					text-indent: -9999px !important;
				}
				.slick-dots li.slick-active button {
					background-color: #eab308 !important;
					width: 24px !important;
					border-radius: 12px !important;
				}
				.slick-dots li button:hover {
					background-color: #9ca3af !important;
				}
				.slick-dots li.slick-active button:hover {
					background-color: #d97706 !important;
				}
				.slick-dots li button:before {
					display: none !important;
				}
			`}</style>
			{/* Subtle Background Elements */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-20 left-20 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-20 w-48 h-48 bg-gray-400 rounded-full blur-3xl"></div>
			</div>

			<div className="relative max-w-7xl mx-auto">
				{/* Header Section */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
						<Plane className="w-5 h-5 text-yellow-500" />
						<span className="text-gray-600 text-sm font-medium tracking-wide">Discover India</span>
					</div>
					
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
						<span className="italic text-gray-700 font-light">Domestic</span>{" "}
						<span className="relative inline-block">
							<span className="text-yellow-500">Getaways</span>
							<div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
						</span>
					</h2>
					
					<p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
						Explore beautiful destinations within the country
					</p>
				</div>

				{/* Packages Carousel */}
				<div className="relative">
					<Slider {...sliderSettings}>
						{domesticPackagesData.map((pkg) => (
							<div key={pkg.id} className="px-3">
								<PackageCard
									id={pkg.id}
									title={pkg.title}
									subtitle={pkg.subtitle}
									price={pkg.price}
									originalPrice={pkg.originalPrice}
									image={pkg.image}
									duration={pkg.duration}
									groupSize={pkg.groupSize}
									location={pkg.location}
									isPopular={pkg.isPopular}
									onSelect={handlePackageSelect}
								/>
							</div>
						))}
					</Slider>
				</div>

				{/* Bottom Call-to-Action */}
				<div className="mt-16 text-center">
					<div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-2xl p-8 relative overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
						<div className="relative z-10">
							<div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto backdrop-blur-sm border border-yellow-500/30">
								<Compass className="w-6 h-6 text-yellow-400" />
							</div>
							<h4 className="text-2xl md:text-3xl font-bold mb-4 text-white">
								Can&apos;t Find Your <span className="text-yellow-400">Dream Destination?</span>
							</h4>
							<p className="text-gray-300 mb-6 max-w-2xl mx-auto">
								Let us create a personalized itinerary just for you. Our travel experts will craft 
								the perfect domestic adventure based on your preferences and budget.
							</p>
							<button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full transition-colors duration-200 inline-flex items-center gap-2">
								<Compass className="w-4 h-4" />
								Customize Your Trip
							</button>
						</div>
					</div>
				</div>

				{/* Decorative Elements */}
				<div className="absolute top-20 right-10 opacity-10">
					<Plane className="w-16 h-16 text-yellow-500" />
				</div>
				<div className="absolute bottom-20 left-10 opacity-10">
					<Compass className="w-14 h-14 text-gray-400" />
				</div>
			</div>
		</section>
	);
};

export default DomesticPackages;
