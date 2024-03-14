import Heading2 from "@/components/heading/Heading2";
import Image from "next/image";
import React from "react";

const HotNew = () => {
	return (
		<div>
			<div className="grid grid-cols-12 gap-5">
				<div className="col-span-8">
					<div className="w-full h-[582px] relative">
						<Image
							src="https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							className="object-cover"
							fill
							alt=""
						/>
					</div>
					<h3 className="font-bold text-[32px] text-white py-3">
						Interior Designer and Maude Interiors by Yvonne Designs
					</h3>
					<p className="line-clamp-2 text-2xl font-normal text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
						suscipit sunt ullam unde eligendi temporibus, repudiandae quos
						architecto rerum dicta exercitationem ipsum. Adipisci sint voluptas
						aspernatur aliquid? Dolor sed unde odit dolores nihil libero
						perferendis veritatis blanditiis! Earum consectetur ex commodi totam
						accusamus rerum libero quo illum magni. Voluptates harum delectus
						consequatur modi, dolorum velit quaerat possimus ad mollitia et ipsa
						debitis. Quisquam nihil architecto deserunt ullam tenetur incidunt
						quibusdam maiores quam et nulla obcaecati voluptatibus hic sunt
						omnis, quia nostrum nisi sit facilis eum! Dolore, saepe incidunt
						earum recusandae nostrum quod officia nemo ad quas nam laudantium
						unde quo.
					</p>
				</div>
				<div className="col-span-4 flex flex-col gap-4">
					{new Array(4).fill(0).map((_, index) => (
						<div key={index} className="flex  gap-2 ">
							<div className="w-[302px] h-[165px] relative flex-shrink-0">
								<Image
									src="https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									className="object-cover rounded"
									fill
									alt=""
								/>
							</div>
							<div>
								<h5 className="text-white font-medium text-xl">
									Interior Designer and Maude Interiors by Yvonne Designs
								</h5>
								<span className="font-medium text-base text-[#7E7E7E]">
									Jan 24, 2024
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default HotNew;
