"use client"

import React from "react";
import { Handshake, Compass, Heart, Leaf, Users, CheckCircle } from "lucide-react";

const UnSpokenTruth = () => {
	return (
        <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-48 h-48 bg-gray-400 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-yellow-300 rounded-full blur-2xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Main Heading */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                        <CheckCircle className="w-5 h-5 text-yellow-500" />
                        <span className="text-gray-600 text-sm font-medium tracking-wide">Travel Guidelines</span>
                    </div>
                    
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
                        The <span className="relative inline-block">
                            <span className="text-yellow-500">Unspoken</span>
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
                        </span>
                    </h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 mb-8">
                        Agreement
                    </h3>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        The foundation of every extraordinary journey lies in shared understanding and mutual respect
                    </p>
                </div>

                {/* Content Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {/* Card 1 */}
                    <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 hover:border-yellow-200 transition-all duration-300">
                        <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Handshake className="w-7 h-7 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                            Respect the Journey
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                            Honor fellow travelers, embrace local cultures, and protect the environments we explore. 
                            Every destination is someone&apos;s home.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 hover:border-yellow-200 transition-all duration-300">
                        <div className="w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Compass className="w-7 h-7 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                            Embrace the Unknown
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                            Step beyond comfort zones and welcome unexpected adventures. 
                            The most memorable moments often come from unplanned experiences.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 hover:border-yellow-200 transition-all duration-300">
                        <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Users className="w-7 h-7 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                            Build Community
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                            Connect authentically, share stories, and support one another. 
                            Great journeys are made better when shared with kindred spirits.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 hover:border-yellow-200 transition-all duration-300">
                        <div className="w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Heart className="w-7 h-7 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                            Stay Curious
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                            Approach every moment with wonder and openness. 
                            Ask questions, taste new flavors, and immerse yourself completely.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 hover:border-yellow-200 transition-all duration-300 md:col-span-2 lg:col-span-1">
                        <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Leaf className="w-7 h-7 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                            Leave Only Footprints
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                            Travel responsibly and sustainably. Preserve these beautiful places 
                            for future generations to discover and cherish.
                        </p>
                    </div>
                </div>

                {/* Enhanced Bottom Section */}
                <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-2xl p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-8 mx-auto backdrop-blur-sm border border-yellow-500/30">
                            <Heart className="w-8 h-8 text-yellow-400" />
                        </div>
                        <h4 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                            Together We <span className="text-yellow-400">Explore</span>
                        </h4>
                        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                            These principles aren&apos;t just guidelines—they&apos;re the heartbeat of every unforgettable adventure. 
                            When we embrace them together, extraordinary moments become inevitable.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                            <span className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                Respect & Honor
                            </span>
                            <span className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                Adventure & Discovery
                            </span>
                            <span className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                Community & Connection
                            </span>
                        </div>
                    </div>
                </div>

                {/* Subtle Decorative Elements */}
                <div className="absolute top-20 right-20 opacity-10">
                    <Compass className="w-20 h-20 text-yellow-500" />
                </div>
                <div className="absolute bottom-20 left-20 opacity-10">
                    <Users className="w-16 h-16 text-gray-400" />
                </div>
            </div>
        </section>
    );
};

export default UnSpokenTruth;