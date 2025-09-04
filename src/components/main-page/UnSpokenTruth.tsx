"use client"

import React from "react";
import { Handshake, Compass, Heart, Leaf, Users } from "lucide-react";

const UnSpokenTruth = () => {
	return (
        <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 bg-orange-300 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-300 rounded-full blur-xl"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-300 rounded-full blur-lg"></div>
            </div>

            <div className="relative max-w-6xl mx-auto text-center">
                {/* Main Heading */}
                <div className="mb-16">
                    <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
                        The <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Unspoken</span>
                    </h2>
                    <h3 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
                        Agreement
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto rounded-full"></div>
                </div>

                {/* Content Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {/* Card 1 */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl flex items-center justify-center mb-6">
                            <Handshake className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Respect the Journey</h4>
                        <p className="text-gray-700 leading-relaxed text-sm">
                            We&apos;re here to create memories, not drama. Respect your fellow travelers, 
                            local cultures, and the environments we explore together.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl flex items-center justify-center mb-6">
                            <Compass className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Embrace the Unknown</h4>
                        <p className="text-gray-700 leading-relaxed text-sm">
                            Say yes to new experiences, step out of your comfort zone, and trust the process. 
                            The magic happens when you least expect it.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl flex items-center justify-center mb-6">
                            <Users className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Build Community</h4>
                        <p className="text-gray-700 leading-relaxed text-sm">
                            Connect authentically with fellow travelers. Share stories, create bonds, 
                            and support each other throughout the journey.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl flex items-center justify-center mb-6">
                            <Heart className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Stay Curious</h4>
                        <p className="text-gray-700 leading-relaxed text-sm">
                            Approach every moment with an open heart and curious mind. 
                            Ask questions, try local food, and immerse yourself fully.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1 flex flex-col items-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl flex items-center justify-center mb-6">
                            <Leaf className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Leave Only Footprints</h4>
                        <p className="text-gray-700 leading-relaxed text-sm">
                            Take only photographs, leave only footprints. Travel responsibly 
                            and help preserve destinations for future generations.
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 text-white text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                        <Heart className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-3xl font-bold mb-4">Together We Explore</h4>
                    <p className="text-xl opacity-90 max-w-3xl mx-auto">
                        These aren&apos;t just rules—they&apos;re the foundation of every unforgettable journey. 
                        When we all commit to these principles, magic happens.
                    </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 opacity-20">
                    <Compass className="w-16 h-16 text-orange-500 animate-pulse" />
                </div>
                <div className="absolute bottom-10 left-10 opacity-20">
                    <Users className="w-14 h-14 text-amber-500 animate-bounce" />
                </div>
            </div>
        </section>
    );
};

export default UnSpokenTruth;