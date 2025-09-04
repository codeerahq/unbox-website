"use client";

import { Search } from "lucide-react";
import React, { useState } from "react";

const HeroSection = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const onSearchChange = () => {
		if (!searchTerm) return;

		alert(searchTerm);
		setSearchTerm("");
	};
	return (
		<div className="w-full h-screen bg-[#F7F7F7] flex  items-center justify-center relative overflow-hidden">
			<div className="background-curve-container h-[90%] w-[95%] rounded-4xl overflow-x-hidden relative">
				<video
					src="main-page/hero-section/main.mp4"
					autoPlay
					loop
					muted
					className="object-cover w-full h-full"
				/>
			</div>
			<div className="absolute flex flex-col items-center justify-center gap-4 inset-0 p-8">
				<h1 className="text-white text-8xl font-bold tracking-tighter">
					Unbox Travel Studio
				</h1>
				<p
					className="max-w-[90%] gap-1 text-base leading-relaxed tracking-tight text-white sm:max-w-2xl 2xl:text-2xl flex items-center justify-center flex-col"
					style={{ opacity: 1, transform: "none" }}
				>
					Where every trip starts with a smile and
					<p>
						{/* <br className="hidden sm:block" />. */}
						<span className="relative inline-block mt-0">
							<span className="relative z-0 font-medium text-yellow-400">
								ends with a story
							</span>
							<span>.</span>
							<svg
								viewBox="0 0 150 60"
								className="absolute -top-0 right-[0.6rem] z-10 block h-[25px] w-[124px] overflow-visible sm:w-[130px] lg:-top-1 lg:-right-0 lg:h-[30px] lg:w-[130px] 2xl:-top-0.5 2xl:right-4 2xl:h-[45px] 2xl:w-[170px]"
								xmlns="http://www.w3.org/2000/svg"
								preserveAspectRatio="none"
								style={{ opacity: 1 }}
							>
								<path
									d="M56.15,64.35 C 94.7,67.56 179,63.62 179,32.96 C 179,7.04 123.43,0 83.74,0 S -8.11,7.04 -8.11,32.08 S 35.55,70.85 129.86,67.56"
									fill="none"
									stroke="white"
									strokeWidth="4"
									pathLength="1"
									strokeDashoffset="0px"
									strokeDasharray="1px 1px"
								></path>
							</svg>
						</span>
					</p>
				</p>
				<div className="search-container mt-6 w-[22%]">
					<div className="relative flex justify-between items-center">
						<input
							type="text"
							placeholder="Search..."
							className="py-4 px-8 rounded-full text-[#e6dfdd] font-normal w-full backdrop-filter backdrop-blur-xl text-md outline-none border-none focus:ring-0 focus:border-transparent"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						<button
							onClick={() => onSearchChange()}
							className="p-2 rounded-full text-black bg-[#D5DFE0] absolute right-4"
						>
							<Search size={18} className="w-4 h-4" />
						</button>
					</div>
				</div>
				<div className="mt-4 flex flex-wrap justify-center gap-3 divide-white/30 text-xs sm:gap-0 sm:divide-x sm:text-sm">
					<div className="flex items-center gap-2 px-4 text-neutral-200 opacity-100">
						<svg
							stroke="currentColor"
							fill="none"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke-linecap="round"
							stroke-linejoin="round"
							className="text-primary h-4 w-4 text-blue-300"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="12" cy="12" r="10"></circle>
							<polyline points="12 6 12 12 16.5 12"></polyline>
						</svg>
						<span className="font-medium">24/7 Support</span>
					</div>

					<div className="flex items-center gap-2 px-4 text-neutral-200 opacity-100">
						<svg
							stroke="currentColor"
							fill="none"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke-linecap="round"
							stroke-linejoin="round"
							className="text-primary h-4 w-4 text-blue-300"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
							<circle cx="9" cy="7" r="4"></circle>
							<polyline points="16 11 18 13 22 9"></polyline>
						</svg>
						<span className="font-medium">100% Personalised</span>
					</div>

					<div className="flex items-center gap-2 px-4 text-neutral-200 opacity-100">
						<svg
							stroke="currentColor"
							fill="none"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke-linecap="round"
							stroke-linejoin="round"
							className="text-primary h-4 w-4 text-blue-300"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
						</svg>
						<span className="font-medium">4.9+ Rated</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
