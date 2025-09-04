"use client";

import React from "react";
import { ArrowUpRight, MapPin, Calendar, Users } from "lucide-react";
import Image from "next/image";

interface PackageCardProps {
	id: number;
	title: string;
	subtitle?: string;
	price: string;
	originalPrice?: string;
	image: string;
	duration?: string;
	groupSize?: string;
	location?: string;
	isPopular?: boolean;
	onSelect?: (id: number) => void;
}

const PackageCard: React.FC<PackageCardProps> = ({
	id,
	title,
	subtitle,
	price,
	originalPrice,
	image,
	duration,
	groupSize,
	location,
	isPopular = false,
	onSelect
}) => {
	const [isPointerDown, setIsPointerDown] = React.useState(false);
	const [hasMoved, setHasMoved] = React.useState(false);

	const handlePointerDown = () => {
		setIsPointerDown(true);
		setHasMoved(false);
	};

	const handlePointerMove = () => {
		if (isPointerDown) {
			setHasMoved(true);
		}
	};

	const handlePointerUp = () => {
		setIsPointerDown(false);
		// Reset after a brief delay
		setTimeout(() => setHasMoved(false), 50);
	};

	const handleCardClick = (e: React.MouseEvent) => {
		// Prevent click if there was movement (dragging)
		if (hasMoved) {
			e.preventDefault();
			e.stopPropagation();
			return false;
		}
		
		if (onSelect) {
			onSelect(id);
		}
	};

	return (
		<div
			className="group relative bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-100 hover:border-yellow-200 transition-all duration-300 cursor-pointer"
			onClick={handleCardClick}
			onPointerDown={handlePointerDown}
			onPointerMove={handlePointerMove}
			onPointerUp={handlePointerUp}
		>
			{/* Popular Badge */}
			{isPopular && (
				<div className="absolute top-4 left-4 z-10 px-3 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full">
					Popular
				</div>
			)}

			{/* Image Section */}
			<div className="relative h-64 overflow-hidden">
				<Image
					width={400}
					height={256}
					src={image}
					alt={title}
					className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

				{/* Action Button */}
				<div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
					<ArrowUpRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
				</div>

				{/* Title & Location Overlay */}
				<div className="absolute bottom-4 left-4 right-4">
					<h3 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-300 transition-colors duration-300">
						{title}
					</h3>
					{subtitle && (
						<p className="text-white/80 text-sm font-medium">
							{subtitle}
						</p>
					)}
					{location && (
						<div className="flex items-center gap-1 mt-2">
							<MapPin className="w-3 h-3 text-white/70" />
							<span className="text-white/70 text-xs">
								{location}
							</span>
						</div>
					)}
				</div>
			</div>

			{/* Content Section */}
			<div className="p-6">
				{/* Additional Info */}
				{(duration || groupSize) && (
					<div className="flex items-center gap-4 mb-4 text-xs text-gray-600">
						{duration && (
							<div className="flex items-center gap-1">
								<Calendar className="w-3 h-3" />
								<span>{duration}</span>
							</div>
						)}
						{groupSize && (
							<div className="flex items-center gap-1">
								<Users className="w-3 h-3" />
								<span>{groupSize}</span>
							</div>
						)}
					</div>
				)}

				{/* Pricing */}
				<div className="flex items-baseline justify-between">
					<div>
						<span className="text-xs text-gray-500 uppercase tracking-wider">
							Starting from
						</span>
						<div className="flex items-baseline gap-2">
							<span className="text-2xl font-bold text-gray-900">
								{price}
							</span>
							{originalPrice && (
								<span className="text-sm text-gray-400 line-through">
									{originalPrice}
								</span>
							)}
						</div>
					</div>

					{/* CTA Button */}
					<button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black text-sm font-semibold rounded-full transition-all duration-200 hover:scale-105">
						Explore
					</button>
				</div>
			</div>
		</div>
	);
};

export default PackageCard;
