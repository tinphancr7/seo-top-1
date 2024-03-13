import React from "react";

const Heading2 = ({children, bg, textColor}) => {
	return (
		<div className="flex items-center justify-center gap-5">
			<div
				className="w-[482px] h-4"
				style={{
					background: bg,

					clipPath: "polygon(100% 15%, 0 46%, 100% 86%)",
				}}
			></div>
			<span
				className={`font-bold text-4xl uppercase `}
				style={{
					color: textColor,
				}}
			>
				{children}
			</span>
			<div className="w-[482px] h-4">
				<div
					className="w-[482px] h-4"
					style={{
						background: bg,

						clipPath: "polygon(100% 15%, 0 46%, 100% 86%)",
						transform: "rotate(180deg)",
					}}
				></div>
			</div>
		</div>
	);
};

export default Heading2;
