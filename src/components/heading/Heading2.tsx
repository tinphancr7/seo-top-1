import React from "react";

const Heading2 = ({children}) => {
	return (
		<div className="flex items-center justify-center gap-5">
			<div className="w-[482px] h-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="100%"
					height="100%"
					viewBox="0 0 484 12"
					fill="none"
				>
					<path
						d="M484 12V0L0 6L484 12Z"
						fill="url(#paint0_linear_1086_14291)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_1086_14291"
							x1="91.1701"
							y1="-12.1638"
							x2="471.298"
							y2="57.3221"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#6679FF" stop-opacity="0" />
							<stop offset="1" stop-color="#70B8E6" />
						</linearGradient>
					</defs>
				</svg>
			</div>
			<span className="text-blueAB font-bold text-4xl uppercase">
				{children}
			</span>
			<div className="w-[482px] h-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="484"
					height="12"
					viewBox="0 0 484 12"
					fill="none"
				>
					<path d="M0 12V0L484 6L0 12Z" fill="url(#paint0_linear_1086_14432)" />
					<defs>
						<linearGradient
							id="paint0_linear_1086_14432"
							x1="392.83"
							y1="-12.1638"
							x2="12.7017"
							y2="57.3221"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#6679FF" stop-opacity="0" />
							<stop offset="1" stop-color="#70B8E6" />
						</linearGradient>
					</defs>
				</svg>
			</div>
		</div>
	);
};

export default Heading2;
