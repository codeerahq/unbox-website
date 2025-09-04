"use client";

import React from "react";
import { Globe, Plane } from "lucide-react";
import Slider from "react-slick";
import PackageCard from "./mini-components/PackageCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// International Packages Data
const internationalPackagesData = [
	{
		id: 7,
		title: "Dubai",
		subtitle: "City of Gold",
		price: "₹45,999",
		originalPrice: "₹55,999",
		image: "https://images.pexels.com/photos/161772/dubai-tower-arab-khalifa-161772.jpeg?auto=compress&cs=tinysrgb&w=800",
		duration: "5 Days",
		groupSize: "2-8 People",
		location: "United Arab Emirates",
		isPopular: true
	},
	{
		id: 8,
		title: "Singapore",
		subtitle: "Garden City",
		price: "₹52,999",
		image: "https://images.pexels.com/photos/460376/pexels-photo-460376.jpeg?auto=compress&cs=tinysrgb&w=800",
		duration: "4 Days",
		groupSize: "2-6 People",
		location: "Singapore"
	},
	{
		id: 9,
		title: "Thailand",
		subtitle: "Land of Smiles",
		price: "₹35,999",
		originalPrice: "₹42,999",
		image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
		duration: "6 Days",
		groupSize: "4-10 People",
		location: "Thailand",
		isPopular: true
	},
	{
		id: 10,
		title: "Maldives",
		subtitle: "Tropical Paradise",
		price: "₹89,999",
		image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
		duration: "7 Days",
		groupSize: "2-4 People",
		location: "Maldives"
	},
	{
		id: 11,
		title: "Bali",
		subtitle: "Island of Gods",
		price: "₹38,999",
		originalPrice: "₹45,999",
		image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
		duration: "5 Days",
		groupSize: "2-8 People",
		location: "Indonesia"
	},
	{
		id: 12,
		title: "Turkey",
		subtitle: "Bridge of Continents",
		price: "₹65,999",
		image: "https://images.pexels.com/photos/1823688/pexels-photo-1823688.jpeg?auto=compress&cs=tinysrgb&w=800",
		duration: "8 Days",
		groupSize: "6-12 People",
		location: "Turkey"
	},
	{
		id: 13,
		title: "Japan",
		subtitle: "Land of Rising Sun",
		price: "₹95,999",
		originalPrice: "₹110,999",
		image: "https://images.pexels.com/photos/161251/senso-ji-temple-japan-kyoto-landmark-161251.jpeg?auto=compress&cs=tinysrgb&w=800",
		duration: "9 Days",
		groupSize: "4-8 People",
		location: "Japan",
		isPopular: true
	},
	{
		id: 14,
		title: "Switzerland",
		subtitle: "Alpine Wonder",
		price: "₹125,999",
		image: "https://images.pexels.com/photos/355241/pexels-photo-355241.jpeg?auto=compress&cs=tinysrgb&w=800",
		duration: "10 Days",
		groupSize: "2-6 People",
		location: "Switzerland"
	}
];

const InternationalPackages = () => {
	const handlePackageSelect = (id: number) => {
		console.log(`Selected package: ${id}`);
		// Add navigation logic here
		alert(`Navigation to international package details page for package ID: ${id}`);
	};

	// Slider settings
	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
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
		<section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
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
				
				/* Custom dots styling for international */
				.international-slider .slick-dots {
					position: relative !important;
					bottom: auto !important;
					display: flex !important;
					justify-content: center !important;
					align-items: center !important;
					gap: 8px !important;
					margin-top: 32px !important;
					list-style: none !important;
				}
				.international-slider .slick-dots li {
					margin: 0 !important;
				}
				.international-slider .slick-dots li button {
					width: 8px !important;
					height: 8px !important;
					border-radius: 50% !important;
					background-color: #cbd5e1 !important;
					border: none !important;
					padding: 0 !important;
					font-size: 0 !important;
					transition: all 0.2s ease !important;
					text-indent: -9999px !important;
				}
				.international-slider .slick-dots li.slick-active button {
					background-color: #3b82f6 !important;
					width: 24px !important;
					border-radius: 12px !important;
				}
				.international-slider .slick-dots li button:hover {
					background-color: #94a3b8 !important;
				}
				.international-slider .slick-dots li.slick-active button:hover {
					background-color: #2563eb !important;
				}
				.international-slider .slick-dots li button:before {
					display: none !important;
				}
			`}</style>
			
			{/* Subtle Background Elements */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-20 left-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-20 w-48 h-48 bg-indigo-400 rounded-full blur-3xl"></div>
			</div>

			<div className="relative max-w-7xl mx-auto">
				{/* Header Section */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full border border-blue-200 shadow-sm">
						<Globe className="w-5 h-5 text-blue-500" />
						<span className="text-gray-600 text-sm font-medium tracking-wide">Explore the World</span>
					</div>
					
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
						<span className="italic text-gray-700 font-light">International</span>{" "}
						<span className="relative inline-block">
							<span className="text-blue-500">Adventures</span>
							<div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
						</span>
					</h2>
					
					<p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
						Discover amazing destinations across the globe with our curated international packages
					</p>
				</div>

				{/* Packages Carousel */}
				<div className="relative international-slider">
					<Slider {...sliderSettings}>
						{internationalPackagesData.map((pkg) => (
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
					<div className="bg-gradient-to-r from-blue-800 via-blue-900 to-indigo-900 rounded-2xl p-8 relative overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
						<div className="relative z-10">
							<div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto backdrop-blur-sm border border-blue-500/30">
								<Globe className="w-6 h-6 text-blue-400" />
							</div>
							<h4 className="text-2xl md:text-3xl font-bold mb-4 text-white">
								Ready for Your <span className="text-blue-400">Global Journey?</span>
							</h4>
							<p className="text-gray-300 mb-6 max-w-2xl mx-auto">
								From exotic beaches to bustling cities, let us craft your perfect international escape. 
								Our travel experts will design a personalized itinerary that fits your dreams and budget.
							</p>
							<button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-colors duration-200 inline-flex items-center gap-2">
								<Globe className="w-4 h-4" />
								Plan My International Trip
							</button>
						</div>
					</div>
				</div>

				{/* Decorative Elements */}
				<div className="absolute top-20 right-10 opacity-10">
					<Plane className="w-16 h-16 text-blue-500" />
				</div>
				<div className="absolute bottom-20 left-10 opacity-10">
					<Globe className="w-14 h-14 text-indigo-400" />
				</div>
			</div>
		</section>
	);
};

export default InternationalPackages;