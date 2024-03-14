import Card from "@/components/card/Card";
import Heading from "@/components/heading/Heading";
import React from "react";

const Hero = () => {
	return (
		<div className=" w-full flex items-center gap-20">
			<div className="w-[312px] flex-shrink-0">
				<Card name="seo" dataOrder={199} orderActive={200} />
			</div>
			<div>
				<h3 className="text-3xl font-bold text-white pb-4">
					QUẢN LÝ BỘ PHẬN S.E.O
				</h3>
				<p className="text-2xl text-white">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum Lorem ipsum
					dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
					velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia deserunt
					mollit anim id est laborum
				</p>
			</div>
		</div>
	);
};

export default Hero;
