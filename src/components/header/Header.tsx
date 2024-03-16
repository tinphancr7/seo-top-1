import {listMenuHeader} from "@/constants";
import React from "react";
import {IconHeader, IconHeader1, IconHeader2} from "../icon";
import Image from "next/image";

const Header = () => {
	return (
		<div className="bg-blue09 py-6 lg:py-12">
			<div className="container mx-auto">
				<div className="flex items-center justify-center lg:justify-between">
					<div className="relative w-[125px] h-9 lg:w-[246px] lg:h-[70px]">
						<Image
							src="/images/logo.png"
							className="object-cover"
							fill
							alt=""
						/>
					</div>
					<div className="md:flex items-center gap-5 text-xl font-medium text-white hidden ">
						{listMenuHeader.map((item, index) => (
							<div key={index}>{item.name}</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
