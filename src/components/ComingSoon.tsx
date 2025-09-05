"use client";

import React from "react";
import { Wrench } from "lucide-react";
import { useRouter } from "next/navigation";

const ComingSoon = () => {
	const router = useRouter();

	const handleGoHome = () => {
		router.push("/");
	};

	return (
		<div className="min-h-screen bg-white relative flex items-center justify-center px-6">
			{/* Background Video */}
			<div className="absolute inset-0 z-0">
				<video
					autoPlay
					loop
					muted
					className="w-full h-full object-cover opacity-25"
					src="/Website under construction.mp4"
				/>
				<div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-amber-50/40"></div>
			</div>

			{/* Main Content */}
			<div className="relative z-10 text-center max-w-3xl mx-auto">
				{/* Enhanced Icon */}
				<div className="mb-12">
					<div className="relative">
						<div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
							<Wrench className="w-10 h-10 text-white" />
						</div>
						<div className="absolute -inset-2 bg-amber-200/30 rounded-2xl -z-10 blur-sm"></div>
					</div>
				</div>

				{/* Main Heading */}
				<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
					Coming <span className="text-amber-500">Soon</span>
				</h1>

				{/* Subtitle */}
				<p className="text-xl text-gray-700 mb-4 font-medium">
					We&apos;re building something amazing
				</p>

				{/* Description */}
				<p className="text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
					Our team is working hard to bring you an incredible travel experience. 
					This page is currently under development and will be available soon.
				</p>

				{/* Action Button */}
				<div className="mb-8">
					<button
						onClick={handleGoHome}
						className="px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
					>
						Back to Home
					</button>
				</div>

				{/* Contact Info */}
				<div className="text-center">
					<p className="text-gray-500 text-sm">
						Questions? Contact us at{" "}
						<a href="mailto:hello@unboxtravel.com" className="text-amber-600 hover:text-amber-700 font-medium">
							hello@unboxtravel.com
						</a>
					</p>
				</div>
			</div>

			{/* Subtle Decorative Elements */}
			<div className="absolute top-10 left-10 w-3 h-3 bg-amber-300/40 rounded-full"></div>
			<div className="absolute top-20 right-16 w-2 h-2 bg-amber-400/30 rounded-full"></div>
			<div className="absolute bottom-16 left-20 w-4 h-4 bg-amber-200/50 rounded-full"></div>
			<div className="absolute bottom-10 right-10 w-2 h-2 bg-amber-500/40 rounded-full"></div>
		</div>
	);
};

export default ComingSoon;
