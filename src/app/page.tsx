import DomesticPackages from "@/components/main-page/DomesticPackages";
import Faqs from "@/components/main-page/Faqs";
import HereSection from "@/components/main-page/HeroSection";
import InternationalPackages from "@/components/main-page/InternationalPackages";
import JoinTheTravelRevolution from "@/components/main-page/JoinTheTravelRevolution";
import PlanByInterest from "@/components/main-page/PlanByInterest";
import UnSpokenTruth from "@/components/main-page/UnSpokenTruth";
import React from "react";

const Home = () => {
	return (
		<div className="home w-full h-screen overflow-x-hidden ">
			<HereSection />
			<PlanByInterest />
			<DomesticPackages />
			<InternationalPackages />
			<JoinTheTravelRevolution />
			<UnSpokenTruth />
			<Faqs />
		</div>
	);
};

export default Home;
