import React from "react";
import Image from "next/image";

const AboutUs = () => {
	return (
		<div className="relative w-full h-[800px] flex items-center justify-center bg-black text-white">
			<div className="absolute inset-0 bg-black/70 z-5 flex items-center justify-center">
				{/* Background Image */}
				<Image
					src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Showcase Banner"
					fill
					sizes="100vw"
					className="absolute inset-0 z-0 opacity-70 object-cover"
				/>

				{/* Content */}
				<div className="relative z-10 text-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">
						Your squad&apos;s <br /> adventure{" "}
						<span className="underline decoration-yellow-400 decoration-4">
							becomes,
						</span>{" "}
						<br />
						<span className="text-white">
							everyone&apos;s
							<br />{" "}
							<s className="decoration-yellow-400 decoration-4">
								regret
							</s>
						</span>
						.
					</h1>
					{/* <p className="text-xl md:text-2xl mb-6">
                    
                </p> */}
					<div className="mt-12">
						<button className="group relative px-8 py-4 bg-transparent border-2 border-amber-300/60 text-amber-300 rounded-full font-medium text-lg hover:bg-amber-300 hover:text-slate-900 transition-all duration-300 ease-out overflow-hidden">
							<span className="relative z-10 flex items-center gap-2">
								Join Adventure
								<svg
									className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
