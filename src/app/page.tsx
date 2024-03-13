"use client";
import Card from "@/components/card/Card";
import Hero from "@/containers/Hero";

import ListRank from "@/containers/ListRank";
import Image from "next/image";
import {useEffect, useState} from "react";

export default function Home() {
	return (
		<main className=" w-full  ">
			<div className="container mx-auto">
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
			</div>
			{/* <div
				className="w-[500px] h-2 "
				// style={{
				// 	backgroundImage: "linear-gradient(90deg, blue 10%,yellow 70%)",
				// }}
				style={{
					backgroundImage:
						"linear-gradient(90deg, rgba(102, 121, 255, 0.00) 10%, #70B8E6 50.09%, rgba(102, 121, 255, 0.00) 90.09%)",
				}}
			></div> */}
		</main>
	);
}
