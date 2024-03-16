import {ListMenuMobile} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuMobile = () => {
	return (
		<div className="fixed left-0 bottom-0 right-0 bg-blue05 z-[99999999] md:hidden">
			<div className="flex items-center justify-around pt-2 pb-3">
				{ListMenuMobile.map((item, index) => (
					<Link
						href={item.link}
						key={index}
						className="flex flex-col gap-1 items-center justify-center"
					>
						<div className={`relative  ${item.area}`}>
							<Image src={item.icon} className="object-cover" fill alt="" />
						</div>
						<span className="text-sm text-[#B6B6B6]">{item?.name}</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default MenuMobile;
