import React from "react";

const JoinTheTravelRevolution = () => {
	return (
		<section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-5xl font-bold text-gray-900 mb-4">
						Join the <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Travel Revolution</span>
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Crafted for the Curious, the Wild & the Real
					</p>
				</div>

				{/* Content Grid */}
				<div className="grid lg:grid-cols-3 gap-12 items-center">
					{/* Left Column */}
					<div className="space-y-12">
						<div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">From Tourist to Traveller</h3>
							<p className="text-gray-600 leading-relaxed">
								You won&apos;t come back the same. We teach you how to backpack, travel solo, and see places 
								like a local, not a checklist-ticking tourist.
							</p>
						</div>

						<div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">Personality Upgrade, Guaranteed</h3>
							<p className="text-gray-600 leading-relaxed">
								Our trips shift something in you, your mindset, your confidence, your curiosity. You&apos;ll return 
								a better storyteller, observer, and human.
							</p>
						</div>

						<div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">Iconic Stays, Always</h3>
							<p className="text-gray-600 leading-relaxed">
								We&apos;re known for our stays. They&apos;re aesthetic, central, and vibe-checked for content and 
								comfort. The kind you don&apos;t want to leave.
							</p>
						</div>

						<div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">Welcome to the Inner Circle</h3>
							<p className="text-gray-600 leading-relaxed">
								Travel once, and you&apos;re in. From secret pop-ups to future collabs, we build a real 
								community. Some even find love. True story.
							</p>
						</div>
					</div>

					{/* Center Column - Illustration */}
					<div className="flex justify-center">
						<div className="relative">
							<div className="w-80 h-80 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center">
								<div className="text-6xl">🧳</div>
							</div>
							{/* Floating elements */}
							<div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center text-2xl animate-bounce">
								✈️
							</div>
							<div className="absolute -bottom-2 -left-2 w-10 h-10 bg-cyan-200 rounded-full flex items-center justify-center text-xl animate-pulse">
								📍
							</div>
						</div>
					</div>

					{/* Right Column */}
					<div className="space-y-12">
						<div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">People You&apos;ll Click With</h3>
							<p className="text-gray-600 leading-relaxed">
								We don&apos;t fill buses. We handpick travellers, solo explorers, chill creatives, full-time 
								funmakers. You&apos;ll find your kind, not just company.
							</p>
						</div>

						<div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">Trip Captains You&apos;d Call Friends</h3>
							<p className="text-gray-600 leading-relaxed">
								Cool, kind, and clued-in. They hype you up, make space for everyone, and know how to 
								turn strangers into squads.
							</p>
						</div>

						<div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">Experiences, Not Itineraries</h3>
							<p className="text-gray-600 leading-relaxed">
								We explore every destination ourselves, so you don&apos;t just &ldquo;go&rdquo;, you experience. Want to swap 
								a shopping stop for cliff jumping? We got you.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default JoinTheTravelRevolution;
