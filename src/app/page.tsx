import HereSection from "@/components/main-page/HeroSection";
import JoinTheTravelRevolution from "@/components/main-page/JoinTheTravelRevolution";
import PlanByInterest from "@/components/main-page/PlanByInterest";
import React from "react";

const Home = () => {
	const click = () => {
		console.log("click");
	};
	return (
		<div className="home w-full h-screen bg-amber-100">
			<HereSection />
			<PlanByInterest />
			<JoinTheTravelRevolution />
		</div>
	);
};

export default Home;
