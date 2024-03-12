import {listMenuHeader} from "@/constants";
import React from "react";
import {IconHeader, IconHeader1, IconHeader2} from "../icon";

const Header = () => {
	return (
		<div className="bg-blue09 py-12">
			<div className="container mx-auto">
				<div className="flex items-center justify-between">
					<div className="flex gap-2 items-baseline">
						<div className="relative ">
							<IconHeader />
							<div className="absolute -top-2 -right-1">
								<IconHeader1 />
							</div>
							<div className="absolute -top-4 -right-3">
								<IconHeader2 />
							</div>
						</div>
						<span className="font-normal text-4xl text-white ">là top</span>
					</div>
					<div className="flex items-center gap-5 text-xl font-medium text-white">
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
