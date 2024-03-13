import Image from "next/image";
import React from "react";

const ListNew = () => {
	return (
		<div>
			<div className="grid grid-cols-12 gap-5">
				<div className="col-span-8">
					<div className="w-full h-[582px] relative">
						<Image
							src={
								"https://images.unsplash.com/photo-1683009427470-a36fee396389?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4NXx8fGVufDB8fHx8fA%3D%3D"
							}
							className="object-cover"
							fill
							alt=""
						/>
					</div>
				</div>
				<div className="col-span-4"></div>
			</div>
		</div>
	);
};

export default ListNew;
