import HereSection from "@/components/main-page/HeroSection";
import JoinTheTravelRevolution from "@/components/main-page/JoinTheTravelRevolution";
import PlanByInterest from "@/components/main-page/PlanByInterest";
import UnSpokenTruth from "@/components/main-page/UnSpokenTruth";
import React from "react";

const Home = () => {
	return (
		<div className="home w-full h-screen overflow-x-hidden ">
			<HereSection />
			<PlanByInterest />
			<JoinTheTravelRevolution />
			<UnSpokenTruth />
		</div>
	);
};

export default Home;
