import Image from "next/image";
import React from "react";

interface HeadingProps {
	children: React.ReactNode;
}
const Heading = ({children}: HeadingProps) => {
	return (
		<div className="flex items-center justify-center relative mb-6">
			<div className="relative h-24 w-[1428px]">
				<Image
					src={"/images/Group 141.png"}
					className="object-cover"
					fill
					alt=""
				/>
			</div>
			<div className="absolute top-[50%] left-[50%]  -translate-x-[50%] -translate-y-[50%]">
				<p className="text-4xl rise text-white uppercase">{children}</p>
			</div>
		</div>
	);
};

export default Heading;
