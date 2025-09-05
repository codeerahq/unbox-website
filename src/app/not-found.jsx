"use client";

import React from "react";
import { Home, ArrowLeft, Search, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

const NotFound = () => {
	const router = useRouter();

	const handleGoHome = () => {
		router.push("/");
	};

	const handleGoBack = () => {
		router.back();
	};

	return (
		<div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
			{/* Clean Text Content */}
			<div className="text-center max-w-2xl mx-auto mb-12">
				{/* Simple Heading */}
				<h1 className="text-6xl md:text-7xl font-bold text-gray-300 mb-4">404</h1>
				<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
					Page Not Found
				</h2>

				{/* Simple Description */}
				<p className="text-lg text-gray-600 mb-8 leading-relaxed">
					The page you're looking for doesn't exist. Let's get you back on track.
				</p>
			</div>

			{/* Clean Action Buttons */}
			<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
				<button
					onClick={handleGoHome}
					className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
				>
					<Home className="w-5 h-5" />
					Back to Home
				</button>
				
				<button
					onClick={handleGoBack}
					className="px-8 py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-lg font-semibold border border-gray-300 hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
				>
					<ArrowLeft className="w-5 h-5" />
					Go Back
				</button>
			</div>
		</div>
	);
};

export default NotFound;
