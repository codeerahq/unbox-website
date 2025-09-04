"use client";

import { Search, ChevronDown } from "lucide-react";
import React, { useState } from "react";

const HeroSection = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const onSearchChange = () => {
		if (!searchTerm) return;
		alert(searchTerm);
		setSearchTerm("");
	};

	const scrollToNext = () => {
		window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
	};

	return (
		<>
			<div className="w-full h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
				{/* Video Container with Fixed Styling */}
				<div className="h-[85%] w-[90%] rounded-2xl overflow-hidden relative shadow-2xl">
					<video
						src="main-page/hero-section/main.mp4"
						autoPlay
						loop
						muted
						playsInline
						className="object-cover w-full h-full"
					/>
					
					{/* Enhanced Overlay for better text readability */}
					<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40"></div>
				</div>

				{/* Main Content */}
				<div className="absolute flex flex-col items-center justify-center gap-6 inset-0 p-8 z-10">
					{/* Main Title */}
					<div className="text-center">
						<h1 className="text-white text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none">
							Unbox Travel Studio
						</h1>
					</div>

					{/* Subtitle with highlight */}
					<div className="text-center">
						<p className="max-w-3xl text-lg md:text-xl lg:text-2xl text-white/95 font-light leading-relaxed">
							Where every trip starts with a smile and{" "}
							<span className="relative inline-block">
								<span className="font-medium text-yellow-400 px-3 py-1 rounded-full bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30">
									ends with a story
								</span>
							</span>
						</p>
					</div>

					{/* Minimal Search Bar */}
					<div className="search-container w-full max-w-md mt-8">
						<div className="relative flex items-center">
							<input
								type="text"
								placeholder="Where to next?"
								className="w-full py-3 px-5 pr-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 text-base outline-none focus:bg-white/20 focus:border-white/50 transition-all duration-300"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
							<button
								onClick={onSearchChange}
								className="absolute right-2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-200"
							>
								<Search className="w-4 h-4" />
							</button>
						</div>
					</div>

					{/* Feature Tags */}
					<div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8">
						<div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90">
							<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
							<span className="text-sm font-medium">24×7 Support</span>
						</div>
						<div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90">
							<div className="w-2 h-2 bg-green-400 rounded-full"></div>
							<span className="text-sm font-medium">100% Personalised</span>
						</div>
						<div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90">
							<div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
							<span className="text-sm font-medium">4.9+ Rated</span>
						</div>
					</div>

					
				</div>
			</div>

			
		</>
	);
};

export default HeroSection;
