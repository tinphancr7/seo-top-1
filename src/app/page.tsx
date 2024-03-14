"use client";
import Card from "@/components/card/Card";
import Heading from "@/components/heading/Heading";
import Heading2 from "@/components/heading/Heading2";
import Hero from "@/containers/Hero";
import HotNew from "@/containers/HotNew";
import ListNew from "@/containers/ListNew";
import ListPartner from "@/containers/ListPartner";

import ListRank from "@/containers/ListRank";
import Image from "next/image";
import {useEffect, useState} from "react";

export default function Home() {
	return (
		<main className=" w-full  ">
			<div className="w-full">
				{/* <div className="show_bg_2"></div> */}
				<div className="show_bg_2 ">
					<div className="my-20 container mx-auto ">
						<Heading>cao thủ tháng 03/20024</Heading>
						<ListRank name="master" order={1} />
					</div>
				</div>

				<div className="bg-blue00">
					<div className="container mx-auto">
						<div className="py-20">
							<Heading>ĐẠI GIA ĐÌNH SEO</Heading>
							<Hero />
						</div>
						<div className="my-20">
							<Heading2
								bg="linear-gradient(90deg, rgba(102, 121, 255, 0.00) 18.29%, #70B8E6 99.09%)"
								textColor={"#ABDBFF"}
							>
								KIM CƯƠNG
							</Heading2>
							<ListRank name="diamond" order={10} />
						</div>
						<div className="my-20">
							<Heading2
								bg="linear-gradient(90deg, rgba(102, 121, 255, 0.00) 18.29%, #FFF 99.09%)"
								textColor={"#FFF"}
							>
								BẠCH KIM
							</Heading2>
							<ListRank name="platinum" order={10} />
						</div>
						<div className="my-20">
							<Heading2
								bg="linear-gradient(90deg, rgba(102, 121, 255, 0.00) 18.29%, #FFCB44 99.09%)"
								textColor={"#FFCB44"}
							>
								VÀNG - ĐỒNG
							</Heading2>
							<ListRank name="gold" order={100} />
						</div>
						<div className="my-20">
							<Heading2
								bg="linear-gradient(90deg, rgba(102, 121, 255, 0.00) 18.29%, #FFF 99.09%)"
								textColor={"#FFF"}
								className="mb-[60px]"
							>
								TIN TỨC NỔI BẬT
							</Heading2>
							<HotNew />
						</div>
						<div>
							<Heading2
								bg="linear-gradient(90deg, rgba(102, 121, 255, 0.00) 18.29%, #FFF 99.09%)"
								textColor={"#FFF"}
								className="mb-[60px]"
							>
								Các tin tức khác
							</Heading2>
							<ListNew />
						</div>
						<div className="pt-20 ">
							<Heading>CÁC ĐƠN VỊ ĐỐI TÁC</Heading>
							<ListPartner />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
