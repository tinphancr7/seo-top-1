"use client";
import Card from "@/components/card/Card";
import Hero from "@/containers/Hero";

import ListRank from "@/containers/ListRank";
import Image from "next/image";
import {useEffect, useState} from "react";

export default function Home() {
	return (
		<main className=" w-full  flex gap-5 container mx-auto">
			{/* <div className="container mx-auto">
				<ListRank title="cao thủ tháng 03/20024" name="master" order={1} />
				<Hero />
				<ListRank
					title="KIM CƯƠNG"
					name="diamond"
					order={10}
					bg="linear-gradient(90deg, rgba(102, 121, 255, 0.00) 18.29%, #70B8E6 99.09%)"
					textColor={"#ABDBFF"}
				/>
				<ListRank
					title="BẠCH KIM"
					name="platinum"
					order={10}
					bg="linear-gradient(90deg, rgba(102, 121, 255, 0.00) 18.29%, #FFF 99.09%)"
					textColor={"#FFF"}
				/>
				<ListRank
					title="VÀNG - ĐỒNG"
					name="gold"
					order={100}
					bg="linear-gradient(90deg, rgba(102, 121, 255, 0.00) 18.29%, #FFCB44 99.09%)"
					textColor={"#FFCB44"}
				/>
			</div> */}
			{/* <div
				className="w-[334px] h-[476px] "
				// style={{
				// 	backgroundImage: "linear-gradient(90deg, blue 10%,yellow 70%)",
				// }}
				style={{
					backgroundImage:
						"linear-gradient(1deg, rgba(45, 57, 143, 0.00) 10%, #986ac8 49.45%, rgba(45, 57, 143, 0.00) 99.54%)",
				}}
			></div> */}
			<div
				className="w-[300px] h-[476px] skew-x-[-5deg]"
				// style={{
				// 	backgroundImage: "linear-gradient(90deg, blue 10%,yellow 70%)",
				// }}
				style={{
					backgroundImage:
						"linear-gradient(1deg, rgba(11, 14, 34, 0.5) 0%, rgba(45, 57, 143, 0.4) 14%, rgb(152, 106, 200) 50%, rgba(45, 57, 143, 0.35) 90%, rgba(11, 14, 34, 0.2) 99%)",
				}}
			></div>
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="335"
					height="476"
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
			</div>
		</main>
	);
}
