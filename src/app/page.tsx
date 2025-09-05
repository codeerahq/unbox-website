import DomesticPackages from "@/components/main-page/DomesticPackages";
import Faqs from "@/components/main-page/Faqs";
import FeatureBanner from "@/components/main-page/FeatureBanner";
import HereSection from "@/components/main-page/HeroSection";
import HighlightPackage from "@/components/main-page/FeaturePackage";
import InternationalPackages from "@/components/main-page/InternationalPackages";
import JoinTheTravelRevolution from "@/components/main-page/JoinTheTravelRevolution";
import PlanByInterest from "@/components/main-page/PlanByInterest";
import UnSpokenTruth from "@/components/main-page/UnSpokenTruth";
import React from "react";
import ShowCaseBanner from "@/components/main-page/ShowCaseBanner";
import AboutUs from "@/components/main-page/JoinAdventureCTABanner";

const Home = () => {
	return (
		<div className="home w-full h-screen overflow-x-hidden ">
			<HereSection />
			<PlanByInterest />
			<DomesticPackages />
			<InternationalPackages />
			<FeatureBanner />
			<HighlightPackage />
			<JoinTheTravelRevolution />
			<ShowCaseBanner />
			<UnSpokenTruth />
			<AboutUs />
			<Faqs />
		</div>
	);
};

export default Home;
