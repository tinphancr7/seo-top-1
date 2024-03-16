import Heading2 from "@/components/heading/Heading2";
import {Pagination} from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const ListNew = () => {
	return (
		<div>
			<div className="grid grid-cols-12 gap-2 lg:gap-10">
				{new Array(3).fill(0).map((_, index) => (
					<div key={index} className="col-span-6 lg:col-span-4">
						<div className="w-full h-[114px] lg:h-[302px] relative">
							<Image
								src="https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								className="object-cover"
								fill
								alt=""
							/>
						</div>
						<h5 className="font-medium text-sm lg:text-xl text-white py-2">
							Interior Designer and Maude Interiors by Yvonne Designs
						</h5>
						<span className="font-medium text-sm lg:text-base text-[#7E7E7E]">
							Jan 24, 2024
						</span>
					</div>
				))}
			</div>
			<div className="flex items-center justify-center w-full mt-6">
				<Pagination
					isCompact
					showControls
					color="secondary"
					total={10}
					initialPage={1}
				/>
			</div>
		</div>
	);
};

export default ListNew;
