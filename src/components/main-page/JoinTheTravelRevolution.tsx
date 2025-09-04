import React from "react";
import { User, Sparkles, Home, Users, Plane, Map, ArrowRight, Globe, Compass, Camera, MapPin, Heart, Mountain } from "lucide-react";

const JoinTheTravelRevolution = () => {
	return (
		<section className="relative py-32 px-6 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
			{/* Travel-themed Background Elements */}
			<div className="absolute inset-0 opacity-10">
				{/* Floating travel icons */}
				<div className="absolute top-20 left-16 animate-float">
					<Plane className="w-8 h-8 text-blue-400 transform rotate-45" />
				</div>
				<div className="absolute top-40 right-20 animate-float delay-1000">
					<Globe className="w-6 h-6 text-emerald-400" />
				</div>
				<div className="absolute bottom-32 left-1/4 animate-float delay-500">
					<Camera className="w-7 h-7 text-purple-400 transform -rotate-12" />
				</div>
				<div className="absolute top-1/3 right-1/3 animate-float delay-1500">
					<Compass className="w-5 h-5 text-rose-400" />
				</div>
				<div className="absolute bottom-40 right-16 animate-float delay-700">
					<Mountain className="w-8 h-8 text-amber-400" />
				</div>
				<div className="absolute top-60 left-1/3 animate-float delay-300">
					<MapPin className="w-6 h-6 text-cyan-400" />
				</div>
			</div>
			
			{/* Dotted travel path */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
				<div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
				{/* Dotted path */}
				<div className="absolute top-1/2 left-0 w-full flex justify-center">
					<div className="flex space-x-8 opacity-30">
						{[...Array(12)].map((_, i) => (
							<div key={i} className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" style={{animationDelay: `${i * 200}ms`}}></div>
						))}
					</div>
				</div>
			</div>
			
			{/* Floating travel elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-100/40 to-teal-100/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
			</div>

			<div className="relative max-w-7xl mx-auto">
				{/* Travel-themed Header */}
				<div className="text-center mb-32">
					<div className="inline-flex items-center gap-4 mb-8 px-8 py-4 bg-white/70 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-lg">
						<Plane className="w-5 h-5 text-blue-500 animate-bounce" />
						<span className="text-blue-700 text-sm font-semibold tracking-[0.3em] uppercase">
							Adventure Awaits
						</span>
						<Globe className="w-5 h-5 text-emerald-500 animate-spin-slow" />
					</div>
					<h2 className="text-6xl md:text-8xl font-extralight text-gray-900 mb-8 leading-[0.9] tracking-tight">
						Join the <br />
						<span className="font-light italic bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
							Travel Revolution
						</span>
					</h2>
					<p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light mb-12">
						Where ordinary travelers become 
						<span className="text-blue-600 font-medium"> legendary explorers</span>
					</p>
					<div className="flex items-center justify-center gap-6 mb-8">
						<div className="w-20 h-[2px] bg-gradient-to-r from-transparent to-blue-300"></div>
						<div className="relative">
							<div className="w-4 h-4 border-2 border-blue-400 rounded-full"></div>
							<div className="absolute inset-0 w-4 h-4 border-2 border-blue-400 rounded-full animate-ping"></div>
						</div>
						<div className="w-20 h-[2px] bg-gradient-to-l from-transparent to-blue-300"></div>
					</div>
				</div>

				{/* Travel-focused Feature Flow */}
				<div className="space-y-20 mb-32">
					{/* Row 1 - Travel Transformation */}
					<div className="flex flex-col lg:flex-row items-stretch gap-8">
						<div className="flex-1 group">
							<div className="relative bg-gradient-to-br from-blue-50/80 to-cyan-50/80 backdrop-blur-sm border border-blue-200/50 rounded-3xl p-10 hover:shadow-2xl hover:shadow-blue-200/30 transition-all duration-700 hover:-translate-y-3 h-full overflow-hidden">
								{/* Travel path decoration */}
								<div className="absolute top-0 right-0 w-32 h-32 opacity-10">
									<div className="w-full h-full border-2 border-dashed border-blue-300 rounded-full animate-spin-slow"></div>
								</div>
								<div className="flex items-start gap-6">
									<div className="relative">
										<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
											<User className="w-8 h-8 text-white" />
										</div>
										<div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
											<Plane className="w-3 h-3 text-blue-600" />
										</div>
									</div>
									<div className="flex-1">
										<h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">From Tourist to Explorer</h3>
										<p className="text-gray-700 leading-relaxed font-light text-lg">
											Transform from following crowds to discovering hidden waterfalls, secret local spots, 
											and experiences that don&apos;t exist in any guidebook.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-center lg:w-16">
							<div className="relative">
								<ArrowRight className="w-6 h-6 text-blue-500 hidden lg:block animate-bounce-x" />
								<div className="absolute inset-0 w-6 h-6 bg-blue-400/20 rounded-full blur-sm animate-pulse"></div>
							</div>
						</div>
						<div className="flex-1 group">
							<div className="relative bg-gradient-to-br from-purple-50/80 to-pink-50/80 backdrop-blur-sm border border-purple-200/50 rounded-3xl p-10 hover:shadow-2xl hover:shadow-purple-200/30 transition-all duration-700 hover:-translate-y-3 h-full overflow-hidden">
								{/* Camera decoration */}
								<div className="absolute top-4 right-4 opacity-10">
									<Camera className="w-12 h-12 text-purple-400 transform rotate-12" />
								</div>
								<div className="flex items-start gap-6">
									<div className="relative">
										<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
											<Sparkles className="w-8 h-8 text-white" />
										</div>
										<div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
											<Heart className="w-3 h-3 text-purple-600" />
										</div>
									</div>
									<div className="flex-1">
										<h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">Soul Transformation</h3>
										<p className="text-gray-700 leading-relaxed font-light text-lg">
											Return with stories that captivate dinner parties, confidence that commands rooms, 
											and a perspective that inspires everyone around you.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Row 2 - Travel Experiences */}
					<div className="flex flex-col lg:flex-row items-stretch gap-8">
						<div className="flex-1 group">
							<div className="relative bg-gradient-to-br from-emerald-50/80 to-teal-50/80 backdrop-blur-sm border border-emerald-200/50 rounded-3xl p-10 hover:shadow-2xl hover:shadow-emerald-200/30 transition-all duration-700 hover:-translate-y-3 h-full overflow-hidden">
								{/* Mountain decoration */}
								<div className="absolute top-2 right-6 opacity-10">
									<Mountain className="w-16 h-16 text-emerald-400" />
								</div>
								<div className="flex items-start gap-6">
									<div className="relative">
										<div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
											<Home className="w-8 h-8 text-white" />
										</div>
										<div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
											<MapPin className="w-3 h-3 text-emerald-600" />
										</div>
									</div>
									<div className="flex-1">
										<h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">Legendary Stays</h3>
										<p className="text-gray-700 leading-relaxed font-light text-lg">
											Sleep in treehouses overlooking rainforest canopies, glass igloos under northern lights, 
											and boutique riads in ancient medinas.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-center lg:w-16">
							<div className="relative">
								<ArrowRight className="w-6 h-6 text-emerald-500 hidden lg:block animate-bounce-x delay-300" />
								<div className="absolute inset-0 w-6 h-6 bg-emerald-400/20 rounded-full blur-sm animate-pulse delay-500"></div>
							</div>
						</div>
						<div className="flex-1 group">
							<div className="relative bg-gradient-to-br from-rose-50/80 to-orange-50/80 backdrop-blur-sm border border-rose-200/50 rounded-3xl p-10 hover:shadow-2xl hover:shadow-rose-200/30 transition-all duration-700 hover:-translate-y-3 h-full overflow-hidden">
								{/* Globe decoration */}
								<div className="absolute top-4 right-4 opacity-10">
									<Globe className="w-12 h-12 text-rose-400 animate-spin-slow" />
								</div>
								<div className="flex items-start gap-6">
									<div className="relative">
										<div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-orange-500 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
											<Users className="w-8 h-8 text-white" />
										</div>
										<div className="absolute -bottom-1 -right-1 w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center">
											<Heart className="w-3 h-3 text-rose-600" />
										</div>
									</div>
									<div className="flex-1">
										<h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">Global Family</h3>
										<p className="text-gray-700 leading-relaxed font-light text-lg">
											Join a tribe of digital nomads, adventure seekers, and culture enthusiasts 
											who become lifelong friends across continents.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Row 3 - Adventure Experiences */}
					<div className="flex flex-col lg:flex-row items-stretch gap-8">
						<div className="flex-1 group">
							<div className="relative bg-gradient-to-br from-amber-50/80 to-yellow-50/80 backdrop-blur-sm border border-amber-200/50 rounded-3xl p-10 hover:shadow-2xl hover:shadow-amber-200/30 transition-all duration-700 hover:-translate-y-3 h-full overflow-hidden">
								{/* Compass decoration */}
								<div className="absolute top-4 right-4 opacity-10">
									<Compass className="w-12 h-12 text-amber-400 animate-spin" />
								</div>
								<div className="flex items-start gap-6">
									<div className="relative">
										<div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
											<Plane className="w-8 h-8 text-white transform rotate-45" />
										</div>
										<div className="absolute -bottom-1 -right-1 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
											<Compass className="w-3 h-3 text-amber-600" />
										</div>
									</div>
									<div className="flex-1">
										<h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">Epic Guides</h3>
										<p className="text-gray-700 leading-relaxed font-light text-lg">
											Led by local legends who know where to watch sunrise over Angkor Wat, 
											find the best street food in Bangkok, and dance until dawn in Rio.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-center lg:w-16">
							<div className="relative">
								<ArrowRight className="w-6 h-6 text-amber-500 hidden lg:block animate-bounce-x delay-700" />
								<div className="absolute inset-0 w-6 h-6 bg-amber-400/20 rounded-full blur-sm animate-pulse delay-1000"></div>
							</div>
						</div>
						<div className="flex-1 group">
							<div className="relative bg-gradient-to-br from-indigo-50/80 to-blue-50/80 backdrop-blur-sm border border-indigo-200/50 rounded-3xl p-10 hover:shadow-2xl hover:shadow-indigo-200/30 transition-all duration-700 hover:-translate-y-3 h-full overflow-hidden">
								{/* Map decoration */}
								<div className="absolute top-2 right-2 opacity-10">
									<Map className="w-14 h-14 text-indigo-400 transform -rotate-12" />
								</div>
								<div className="flex items-start gap-6">
									<div className="relative">
										<div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
											<Map className="w-8 h-8 text-white" />
										</div>
										<div className="absolute -bottom-1 -right-1 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
											<Camera className="w-3 h-3 text-indigo-600" />
										</div>
									</div>
									<div className="flex-1">
										<h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">Real Adventures</h3>
										<p className="text-gray-700 leading-relaxed font-light text-lg">
											Swap tour buses for motorbike rides through rice paddies, museums for cooking classes 
											with grandmothers, and hotels for overnight desert camps.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Adventure-themed CTA Section */}
				<div className="relative overflow-hidden">
					{/* Travel-inspired background */}
					<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl"></div>
					<div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-emerald-600/20 rounded-3xl"></div>
					
					{/* Floating travel elements */}
					<div className="absolute top-8 left-8 w-20 h-20 bg-white/5 rounded-full animate-float flex items-center justify-center">
						<Plane className="w-8 h-8 text-white/30 transform rotate-45" />
					</div>
					<div className="absolute top-16 right-16 w-16 h-16 bg-white/5 rounded-full animate-float delay-1000 flex items-center justify-center">
						<Globe className="w-6 h-6 text-white/30 animate-spin-slow" />
					</div>
					<div className="absolute bottom-12 left-16 w-12 h-12 bg-white/5 rounded-full animate-float delay-500 flex items-center justify-center">
						<Camera className="w-5 h-5 text-white/30" />
					</div>
					<div className="absolute bottom-8 right-8 w-24 h-24 bg-white/5 rounded-full animate-float delay-1500 flex items-center justify-center">
						<Compass className="w-10 h-10 text-white/30 animate-spin" />
					</div>
					
					{/* Travel path decoration */}
					<div className="absolute inset-0 flex items-center justify-center opacity-10">
						<div className="w-full max-w-4xl h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
					</div>
					
					<div className="relative z-10 px-16 py-24 text-center text-white">
						<div className="flex items-center justify-center mb-12">
							<div className="relative">
								<div className="w-32 h-32 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
									<div className="w-20 h-20 bg-gradient-to-br from-blue-400/30 to-emerald-400/30 rounded-full flex items-center justify-center">
										<Users className="w-12 h-12 text-white" />
									</div>
								</div>
								<div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center animate-bounce">
									<Heart className="w-5 h-5 text-white" />
								</div>
								<div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
									<Sparkles className="w-4 h-4 text-white" />
								</div>
							</div>
						</div>
						
						<h3 className="text-5xl md:text-7xl font-light mb-8 tracking-tight leading-tight">
							Welcome to the 
							<span className="block font-medium bg-gradient-to-r from-blue-200 via-emerald-200 to-cyan-200 bg-clip-text text-transparent">
								Adventure Circle
							</span>
						</h3>
						
						<p className="text-xl md:text-2xl opacity-90 max-w-5xl mx-auto leading-relaxed mb-12 font-light">
							Join once, explore forever. Secret sunrise spots, hidden local gems, lifelong travel companions. 
							<span className="text-emerald-200 font-medium">Some find their soulmate on a mountaintop. True story.</span>
						</p>
						
						<div className="flex flex-col sm:flex-row items-center justify-center gap-8">
							<button className="group relative bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-12 py-5 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 inline-flex items-center gap-4 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105">
								<Plane className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
								<span>Start Your Adventure</span>
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
								<div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
							</button>
							
							<div className="flex items-center gap-4 text-white/80">
								<div className="flex -space-x-3">
									<div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white/20 flex items-center justify-center">
										<Globe className="w-4 h-4 text-white" />
									</div>
									<div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full border-2 border-white/20 flex items-center justify-center">
										<Mountain className="w-4 h-4 text-white" />
									</div>
									<div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full border-2 border-white/20 flex items-center justify-center">
										<Camera className="w-4 h-4 text-white" />
									</div>
								</div>
								<div className="text-left">
									<div className="text-sm font-semibold">15,000+ Adventurers</div>
									<div className="text-xs opacity-70">From 85+ countries</div>
								</div>
							</div>
						</div>
						
						{/* Travel stats */}
						{/* <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
							<div className="text-center">
								<div className="text-2xl font-bold text-emerald-300">127</div>
								<div className="text-sm opacity-70">Countries</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-bold text-blue-300">2.4M</div>
								<div className="text-sm opacity-70">Photos Shared</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-bold text-purple-300">89%</div>
								<div className="text-sm opacity-70">Book Again</div>
							</div>
						</div> */}
					</div>
				</div>

				{/* Travel-themed decorative elements */}
				<div className="absolute -top-10 left-1/4 w-4 h-4 bg-blue-300 rounded-full opacity-60 animate-bounce">
					<Plane className="w-full h-full text-blue-600 transform rotate-45" />
				</div>
				<div className="absolute top-1/3 -right-8 w-3 h-3 bg-emerald-300 rounded-full opacity-40 animate-pulse">
					<Globe className="w-full h-full text-emerald-600" />
				</div>
				<div className="absolute bottom-1/4 -left-6 w-5 h-5 bg-purple-300 rounded-full opacity-50 animate-ping">
					<Camera className="w-full h-full text-purple-600" />
				</div>
				<div className="absolute -bottom-8 right-1/3 w-3 h-3 bg-rose-300 rounded-full opacity-60 animate-bounce delay-1000">
					<Heart className="w-full h-full text-rose-600" />
				</div>
			</div>
		</section>
	);
};

export default JoinTheTravelRevolution;
