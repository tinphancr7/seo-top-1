import Card from "@/components/card/Card";
import Heading from "@/components/heading/Heading";
import Image from "next/image";
import React from "react";

const Hero = () => {
	return (
		<div>
			<Heading />
			<div className="py-10 flex items-center gap-5">
				{new Array(2).fill(0).map((item) => (
					<Card />
				))}
			</div>
		</div>
	);
};

export default Hero;
