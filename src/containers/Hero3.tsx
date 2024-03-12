"use clients";
import Card from "@/components/card/Card";
import Heading2 from "@/components/heading/Heading2";
import React from "react";

const Hero3 = () => {
	return (
		<div>
			<Heading2>KIM CƯƠNG</Heading2>
			<div className="py-10 flex items-center gap-5">
				{new Array(2).fill(0).map((item, index) => (
					<Card key={index} color="text-red-500" />
				))}
			</div>
		</div>
	);
};

export default Hero3;
