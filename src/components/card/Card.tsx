"use client";
import {ranksLogo} from "@/constants";
import Image from "next/image";

const Card = ({dataOrder, orderActive, name}: any) => {
	const rankLogo = ranksLogo.find((item) => item.name === name);
	console.log("Card", rankLogo);

	return (
		<div
			className={`w-full h-[476px] relative flex-shrink-0 carousel-item skew-x-[-10deg] ${
				name === "master"
					? "example_wrapper"
					: name === "seo"
					? ""
					: "example_wrapper2"
			}   `}
			data-order={dataOrder}
			style={{
				backgroundImage:
					name === "seo"
						? "linear-gradient(1deg, rgba(11, 14, 34, 0.5) 0%, rgba(45, 57, 143, 0.4) 14%, rgb(152, 106, 200) 50%, rgba(45, 57, 143, 0.35) 90%, rgba(11, 14, 34, 0.2) 99%)"
						: "linear-gradient(1deg, rgba(45, 57, 143, 0.00) -0.3%, rgba(45, 57, 143, 0.35) 49.45%, rgba(45, 57, 143, 0.00) 99.54%)",
			}}
		>
			<div
				className="w-[3px] h-full absolute top-0 left-0"
				style={{
					backgroundImage:
						name === "seo"
							? "linear-gradient(1deg,  rgba(61, 72, 153, 0) 20%, #FAF5FF 50%,rgba(61, 72, 153, 0) 80%)"
							: "linear-gradient(0deg, rgba(61, 72, 153, 0) 20%, #6679FF 50%,rgba(61, 72, 153, 0) 80%)",
				}}
			></div>
			<div
				className="w-[3px] h-full absolute top-0 right-0"
				style={{
					backgroundImage:
						name === "seo"
							? "linear-gradient(1deg,  rgba(61, 72, 153, 0) 20%, #FAF5FF 50%,rgba(61, 72, 153, 0) 80%)"
							: "linear-gradient(0deg, rgba(61, 72, 153, 0) 20%, #6679FF 50%,rgba(61, 72, 153, 0) 80%)",
				}}
			></div>
			<div className=" absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] z-[9999] flex flex-col items-center justify-center skew-x-[10deg]">
				<div
					className={` flex-shrink-0 relative animate-image `}
					style={{
						width:
							orderActive?.toString() === dataOrder?.toString()
								? ranksLogo[0].width
								: rankLogo?.width,
						height:
							orderActive?.toString() === dataOrder?.toString()
								? ranksLogo[0].height
								: rankLogo?.height,
					}}
				>
					<Image
						src={`/images/${
							orderActive?.toString() === dataOrder?.toString() &&
							name === "master"
								? ranksLogo[0].url
								: rankLogo?.url
						}`}
						fill
						className="object-cover "
						alt=""
					/>
					<div
						className="absolute  left-[50%]  rounded-full -translate-x-[50%]  z-[-1]"
						style={{
							width: rankLogo?.widthImg,
							height: rankLogo?.heightImg,
							top:
								orderActive?.toString() === dataOrder?.toString()
									? ranksLogo[0].top
									: rankLogo?.top,
						}}
					>
						<Image
							src={
								"https://images.unsplash.com/photo-1608178398319-48f814d0750c?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							}
							fill
							className="object-cover rounded-full"
							alt=""
						/>
					</div>
					<span
						className="absolute inline-block  left-[50%] -translate-x-[50%] font-bold text-base text-white uppercase"
						style={{
							bottom:
								orderActive?.toString() === dataOrder?.toString()
									? ranksLogo[0].bottom
									: rankLogo?.bottom,
						}}
					>
						Boss
					</span>
				</div>
				<div className="text-white font-extrabold text-center text-3xl text-nowrap">
					MR. LINDA
				</div>
			</div>
		</div>
	);
};

export default Card;
