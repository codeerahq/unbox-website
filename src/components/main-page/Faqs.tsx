"use client";

import React, { useState } from "react";
import {
	ChevronDown,
	ChevronUp,
	HelpCircle,
	MessageCircle
} from "lucide-react";

// FAQ Data Object
const faqData = [
	{
		id: 1,
		question:
			"What makes Unbox Travel Studio different from other travel agencies?",
		answer: "We're not just a travel agency - we're your personal travel architects. Every journey is 100% personalized based on your preferences, budget, and dreams. Our 24/7 support ensures you're never alone on your adventure, and our 4.9+ rating speaks to our commitment to creating unforgettable experiences."
	},
	{
		id: 2,
		question: "How far in advance should I book my trip?",
		answer: "For the best experience and pricing, we recommend booking 2-3 months in advance for domestic trips and 3-6 months for international destinations. However, we also specialize in last-minute adventures - just give us a call and we'll work our magic!"
	},
	{
		id: 3,
		question: "Do you handle visa requirements and documentation?",
		answer: "Absolutely! We provide complete visa assistance and documentation support. Our team will guide you through the entire process, from application to approval, ensuring all your paperwork is in order before your departure date."
	},
	{
		id: 4,
		question: "What's included in your travel packages?",
		answer: "Our packages are fully customizable, but typically include accommodation, transportation, guided tours, meals (as per your preference), travel insurance, and 24/7 on-ground support. We believe in transparency - no hidden costs, just pure adventure."
	},
	{
		id: 5,
		question: "Can I modify or cancel my booking?",
		answer: "Yes! We understand that plans can change. Modifications are possible up to 15 days before departure (subject to availability). Cancellation policies vary by destination and season, but we always work to minimize any impact on you."
	},
	{
		id: 6,
		question: "Do you offer group discounts?",
		answer: "Definitely! We love bringing people together for amazing adventures. Groups of 6+ travelers receive special pricing, and we can create custom experiences perfect for families, friends, corporate teams, or special celebrations."
	},
	{
		id: 7,
		question: "What safety measures do you have in place?",
		answer: "Your safety is our top priority. We partner only with verified accommodations and transport providers, provide comprehensive travel insurance, maintain 24/7 emergency support, and keep you updated on all destination-specific safety guidelines."
	},
	{
		id: 8,
		question: "How do you personalize each travel experience?",
		answer: "It starts with understanding YOU. Through detailed consultations, we learn about your interests, travel style, budget, and bucket list. Our expert team then crafts a unique itinerary that reflects your personality and ensures every moment resonates with your travel dreams."
	}
];

const Faqs = () => {
	const [openFaq, setOpenFaq] = useState<number | null>(null);

	const toggleFaq = (id: number) => {
		setOpenFaq(openFaq === id ? null : id);
	};

	return (
		<section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
			{/* Subtle Background Elements */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-20 right-20 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 left-20 w-48 h-48 bg-gray-400 rounded-full blur-3xl"></div>
				<div className="absolute top-1/2 right-1/3 w-32 h-32 bg-yellow-300 rounded-full blur-2xl"></div>
			</div>

			<div className="relative max-w-4xl mx-auto">
				{/* Header Section */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
						<HelpCircle className="w-5 h-5 text-yellow-500" />
						<span className="text-gray-600 text-sm font-medium tracking-wide">
							Got Questions?
						</span>
					</div>

					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
						Frequently Asked{" "}
						<span className="relative inline-block">
							<span className="text-yellow-500">Questions</span>
							<div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
						</span>
					</h2>

					<p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
						Everything you need to know about your journey with
						Unbox Travel Studio
					</p>
				</div>

				{/* FAQ Items */}
				<div className="space-y-4">
					{faqData.map((faq) => (
						<div
							key={faq.id}
							className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
						>
							<button
								onClick={() => toggleFaq(faq.id)}
								className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/30 transition-colors duration-200 group"
							>
								<h3 className="text-lg font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-200 pr-4">
									{faq.question}
								</h3>
								<div className="flex-shrink-0 w-8 h-8 bg-yellow-500/10 rounded-full flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors duration-200">
									{openFaq === faq.id ? (
										<ChevronUp className="w-5 h-5 text-yellow-600" />
									) : (
										<ChevronDown className="w-5 h-5 text-yellow-600" />
									)}
								</div>
							</button>

							{openFaq === faq.id && (
								<div className="px-8 pb-6 animate-fadeIn">
									<div className="pt-4 border-t border-gray-200/50">
										<p className="text-gray-600 leading-relaxed">
											{faq.answer}
										</p>
									</div>
								</div>
							)}
						</div>
					))}
				</div>

				{/* Bottom Call-to-Action */}
				<div className="mt-16 text-center">
					<div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-2xl p-8 relative overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
						<div className="relative z-10">
							<div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto backdrop-blur-sm border border-yellow-500/30">
								<MessageCircle className="w-6 h-6 text-yellow-400" />
							</div>
							<h4 className="text-2xl md:text-3xl font-bold mb-4 text-white">
								Still Have{" "}
								<span className="text-yellow-400">
									Questions?
								</span>
							</h4>
							<p className="text-gray-300 mb-6 max-w-2xl mx-auto">
								Our travel experts are here 24/7 to help you
								plan the perfect adventure. Get in touch and
								let&apos;s start planning your dream journey
								today!
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full transition-colors duration-200 flex items-center justify-center gap-2">
									<MessageCircle className="w-4 h-4" />
									Chat with Expert
								</button>
								<button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 transition-all duration-200">
									Schedule a Call
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Decorative Elements */}
				<div className="absolute top-20 left-10 opacity-10">
					<HelpCircle className="w-16 h-16 text-yellow-500" />
				</div>
				<div className="absolute bottom-20 right-10 opacity-10">
					<MessageCircle className="w-14 h-14 text-gray-400" />
				</div>
			</div>

			<style jsx>{`
				@keyframes fadeIn {
					from {
						opacity: 0;
						transform: translateY(-10px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				.animate-fadeIn {
					animation: fadeIn 0.3s ease-out;
				}
			`}</style>
		</section>
	);
};

export default Faqs;
