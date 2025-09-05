"use client";

import React from "react";
import { Star, MapPin, Calendar, Users, ArrowRight, Sparkles, Globe, Plane } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Featured Domestic Package
const featuredDomesticPackage = {
	id: 1,
	title: "Kashmir Valley",
	subtitle: "Paradise on Earth",
	description: "Experience the breathtaking beauty of Kashmir with its pristine lakes, snow-capped mountains, and vibrant gardens. A perfect escape into nature's wonderland.",
	price: "₹22,999",
	originalPrice: "₹28,999",
	image: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1200",
	duration: "7 Days",
	groupSize: "6-12 People",
	location: "Jammu & Kashmir, India",
	rating: 4.8,
	reviews: 245,
	features: ["Houseboat Stay", "Shikara Rides", "Garden Tours", "Local Cuisine"],
	isPopular: true
};

// Featured International Package
const featuredInternationalPackage = {
	id: 2,
	title: "Santorini Escape",
	subtitle: "Greek Island Paradise",
	description: "Discover the magical sunsets, white-washed buildings, and crystal-clear waters of Greece's most iconic island destination. An unforgettable Mediterranean experience.",
	price: "₹89,999",
	originalPrice: "₹105,999",
	image: "https://images.pexels.com/photos/161815/santorini-oia-greece-island-161815.jpeg?auto=compress&cs=tinysrgb&w=1200",
	duration: "6 Days",
	groupSize: "2-8 People",
	location: "Santorini, Greece",
	rating: 4.9,
	reviews: 324,
	features: ["Luxury Resort", "Sunset Tours", "Wine Tasting", "Private Transfers"],
	isPopular: true
};

const HighlightPackage = () => {
	// CONFIGURATION: Set which packages to show
	// Change these boolean values to control what appears:
	// - Both true = shows tabs with both domestic and international
	// - Only one true = shows single package without tabs
	// - Both false = shows nothing
	const showDomestic = true;
	const showInternational = true;
	
	// Determine if tabs should be visible (only if both types are enabled)
	const showTabs = showDomestic && showInternational;
	
	// Get the single package type if only one is enabled
	const singlePackageType = !showTabs ? (showDomestic ? 'domestic' : 'international') : null;

	const handleBookNow = (packageTitle: string) => {
		alert(`Booking ${packageTitle} package`);
	};

	// Render single package card
	const renderPackageCard = (pkg: typeof featuredDomesticPackage, type: 'domestic' | 'international') => (
		<div className="relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 group max-w-5xl mx-auto">
			<div className="grid lg:grid-cols-2 gap-0 min-h-[400px] lg:min-h-[500px]">
				{/* Image Section */}
				<div className="relative h-80 lg:h-auto overflow-hidden">
					{/* Popular Badge */}
					{pkg.isPopular && (
						<div className="absolute top-6 left-6 z-20 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-semibold rounded-full shadow-lg">
							Most Popular
						</div>
					)}
					
					{/* Rating Badge */}
					<div className="absolute top-6 right-6 z-20 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full flex items-center gap-1 shadow-lg">
						<Star className="w-3 h-3 text-yellow-500 fill-current" />
						<span className="text-xs font-semibold text-gray-900">{pkg.rating}</span>
						<span className="text-xs text-gray-500">({pkg.reviews})</span>
					</div>

					<Image
						src={pkg.image}
						alt={pkg.title}
						fill
						className="object-cover group-hover:scale-105 transition-transform duration-700"
						sizes="(max-width: 1024px) 100vw, 50vw"
						priority
					/>
					
					{/* Gradient Overlay */}
					<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20 z-10"></div>
				</div>

				{/* Content Section */}
				<div className="relative p-8 lg:p-12 flex flex-col justify-center">
					{/* Location */}
					<div className="flex items-center gap-2 mb-4">
						<MapPin className={`w-4 h-4 ${type === 'domestic' ? 'text-yellow-500' : 'text-blue-500'}`} />
						<span className="text-sm text-gray-600 font-medium">{pkg.location}</span>
					</div>

					{/* Title & Subtitle */}
					<h3 className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-2 group-hover:${type === 'domestic' ? 'text-yellow-600' : 'text-blue-600'} transition-colors duration-300`}>
						{pkg.title}
					</h3>
					<p className={`text-lg font-medium mb-4 ${type === 'domestic' ? 'text-yellow-600' : 'text-blue-600'}`}>
						{pkg.subtitle}
					</p>
					
					{/* Description */}
					<p className="text-gray-600 mb-6 leading-relaxed">{pkg.description}</p>

					{/* Package Details */}
					<div className="flex items-center gap-6 mb-6 text-sm text-gray-600">
						<div className="flex items-center gap-2">
							<Calendar className={`w-4 h-4 ${type === 'domestic' ? 'text-yellow-500' : 'text-blue-500'}`} />
							<span>{pkg.duration}</span>
						</div>
						<div className="flex items-center gap-2">
							<Users className={`w-4 h-4 ${type === 'domestic' ? 'text-yellow-500' : 'text-blue-500'}`} />
							<span>{pkg.groupSize}</span>
						</div>
					</div>

					{/* Features */}
					<div className="mb-8">
						<p className="text-sm font-semibold text-gray-900 mb-3">What&apos;s Included:</p>
						<div className="grid grid-cols-2 gap-2">
							{pkg.features.map((feature, index) => (
								<div key={index} className="flex items-center gap-2">
									<div className={`w-1.5 h-1.5 rounded-full ${type === 'domestic' ? 'bg-yellow-500' : 'bg-blue-500'}`}></div>
									<span className="text-sm text-gray-600">{feature}</span>
								</div>
							))}
						</div>
					</div>

					{/* Pricing & CTA */}
					<div className="flex items-center justify-between">
						<div>
							<p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Starting from</p>
							<div className="flex items-baseline gap-3">
								<span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
								{pkg.originalPrice && (
									<span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
								)}
							</div>
							<p className="text-xs text-gray-500 mt-1">per person</p>
						</div>

						<button 
							onClick={() => handleBookNow(pkg.title)}
							className={`px-8 py-4 font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 group text-white ${
								type === 'domestic' 
									? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600' 
									: 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600'
							}`}
						>
							<span>Book Now</span>
							<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
						</button>
					</div>

					{/* Savings Badge */}
					{pkg.originalPrice && (
						<div className="absolute top-8 right-8 hidden lg:block">
							<div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
								Save ₹{parseInt(pkg.originalPrice.replace('₹', '').replace(',', '')) - parseInt(pkg.price.replace('₹', '').replace(',', ''))}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);

	// Don't render anything if no packages are enabled
	if (!showDomestic && !showInternational) {
		return null;
	}

	return (
		<section className="relative py-20 px-6 overflow-hidden">
			{/* Dynamic Background based on active tab or single type */}
			<div className={`absolute inset-0 ${
				singlePackageType === 'domestic' || (!showTabs && showDomestic) 
					? 'bg-gradient-to-br from-yellow-50 via-white to-orange-50' 
					: singlePackageType === 'international' || (!showTabs && showInternational)
					? 'bg-gradient-to-br from-blue-50 via-white to-indigo-50'
					: 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
			}`}></div>
			
			{/* Decorative Background Elements */}
			<div className="absolute inset-0 opacity-5">
				<div className={`absolute top-20 left-20 w-32 h-32 rounded-full blur-3xl ${
					singlePackageType === 'domestic' ? 'bg-yellow-300' : 'bg-blue-300'
				}`}></div>
				<div className={`absolute bottom-20 right-20 w-40 h-40 rounded-full blur-3xl ${
					singlePackageType === 'domestic' ? 'bg-orange-300' : 'bg-indigo-300'
				}`}></div>
			</div>

			<div className="relative max-w-6xl mx-auto">
				{/* Header Section */}
				<div className="text-center mb-12">
					<div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
						<Sparkles className="w-4 h-4 text-indigo-500" />
						<span className="text-gray-600 text-sm font-medium">Featured Package</span>
					</div>
					
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
						This Week&apos;s <span className="text-indigo-600">Special</span>
					</h2>
					<p className="text-gray-600">Hand-picked destination for the ultimate travel experience</p>
				</div>

				{/* Conditional Rendering: Tabs or Single Content */}
				{showTabs ? (
					/* TABS VERSION - Shows when both domestic and international are enabled */
					<Tabs defaultValue="domestic" className="w-full">
						<TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
							<TabsTrigger value="domestic" className="flex items-center gap-2">
								<Plane className="w-4 h-4" />
								Domestic
							</TabsTrigger>
							<TabsTrigger value="international" className="flex items-center gap-2">
								<Globe className="w-4 h-4" />
								International
							</TabsTrigger>
						</TabsList>
						
						<TabsContent value="domestic" className="mt-0">
							{renderPackageCard(featuredDomesticPackage, 'domestic')}
						</TabsContent>
						
						<TabsContent value="international" className="mt-0">
							{renderPackageCard(featuredInternationalPackage, 'international')}
						</TabsContent>
					</Tabs>
				) : (
					/* SINGLE PACKAGE VERSION - Shows when only one type is enabled (NO TABS) */
					<div>
						{showDomestic && renderPackageCard(featuredDomesticPackage, 'domestic')}
						{showInternational && renderPackageCard(featuredInternationalPackage, 'international')}
					</div>
				)}

				{/* Trust Indicators */}
				<div className="mt-12 text-center">
					<div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-green-500 rounded-full"></div>
							<span>Free Cancellation</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
							<span>24/7 Support</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
							<span>Best Price Guarantee</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HighlightPackage;
