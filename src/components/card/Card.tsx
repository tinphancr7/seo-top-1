import Image from "next/image";
import React from "react";

const Card = ({color}: {color: string}) => {
	return (
		<div className="w-[335px] h-[476px] relative flex-shrink-0">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="100%"
				height="100%"
				viewBox="0 0 335 476"
				fill="none"
			>
				<path
					d="M334.5 0L48.5 0L0.5 476H286.5L334.5 0Z"
					fill="url(#paint0_linear_884_1074)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_884_1074"
						x1="170.5"
						y1="479.65"
						x2="164.105"
						y2="0.0453115"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#2D398F" stop-opacity="0" />
						<stop offset="0.498322" stop-color="#9D6DCD" />
						<stop offset="1" stop-color="#2D398F" stop-opacity="0" />
					</linearGradient>
				</defs>
			</svg>

			<div className=" absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] ">
				<div className="w-[200px] h-[226px] flex-shrink-0 relative ">
					<Image
						src={"/images/frame.png"}
						fill
						className="object-cover"
						alt=""
					/>
					<div className="absolute top-[50%] left-[50%] w-[88px] h-[88px] rounded-full -translate-x-[50%] -translate-y-[50%] z-[-1]">
						<Image
							src={
								"https://images.unsplash.com/photo-1707058855897-9c03822150d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D"
							}
							fill
							className="object-cover rounded-full"
							alt=""
						/>
					</div>
					<span className="absolute inline-block bottom-[60px] left-[50%] -translate-x-[50%] font-bold text-base text-purple55 uppercase">
						Boss
					</span>
				</div>
				<div className="text-white font-extrabold text-center text-3xl">
					MR. LINDA
				</div>
			</div>
		</div>
	);
};

export default Card;
