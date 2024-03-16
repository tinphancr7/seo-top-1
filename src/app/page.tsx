import Heading from "@/components/heading/Heading";
import Heading2 from "@/components/heading/Heading2";
import Hero from "@/components/hero/Hero";
import HotNew from "@/components/new/HotNew";
import ListNew from "@/components/new/ListNew";
import ListPartner from "@/components/partner/ListPartner";
import ListRank from "@/components/rank/ListRank";

export default function Home() {
	return (
		<main className=" w-full overflow-hidden relative ">
			<div className="show_bg_2 ">
				<div className="lg:py-20 container mx-auto ">
					<Heading>cao thủ tháng 03/20024</Heading>
					<ListRank name="master" order={1} />
				</div>
			</div>

			<div className="bg-blue00">
				<div className="container mx-auto">
					<div className=" pb-10 lg:py-20">
						<Heading>ĐẠI GIA ĐÌNH SEO</Heading>
						<Hero />
					</div>
					<div className="pb-10 lg:pb-20">
						<Heading2
							bg="linear-gradient(90deg, rgba(102, 121, 255, 0.00) 18.29%, #70B8E6 99.09%)"
							textColor={"#ABDBFF"}
						>
							KIM CƯƠNG
						</Heading2>
						<ListRank name="diamond" order={10} />
					</div>
					<div className="pb-10 lg:pb-20">
						<Heading2
							bg="linear-gradient(90deg, rgba(102, 121, 255, 0.00) 18.29%, #FFF 99.09%)"
							textColor={"#FFF"}
						>
							BẠCH KIM
						</Heading2>
						<ListRank name="platinum" order={10} />
					</div>
					<div className="pb-10 lg:pb-20">
						<Heading2
							bg="linear-gradient(90deg, rgba(102, 121, 255, 0.00) 18.29%, #FFCB44 99.09%)"
							textColor={"#FFCB44"}
						>
							VÀNG - ĐỒNG
						</Heading2>
						<ListRank name="gold" order={100} />
					</div>
					<div className="pb-10 lg:pb-20">
						<Heading2
							bg="linear-gradient(90deg, rgba(102, 121, 255, 0.00) 18.29%, #FFF 99.09%)"
							textColor={"#FFF"}
							className="lg:mb-[60px]"
						>
							TIN TỨC NỔI BẬT
						</Heading2>
						<HotNew />
					</div>
					<div className="pb-10 lg:pb-20">
						<Heading2
							bg="linear-gradient(90deg, rgba(102, 121, 255, 0.00) 18.29%, #FFF 99.09%)"
							textColor={"#FFF"}
							className="lg:mb-[60px]"
						>
							Các tin tức khác
						</Heading2>
						<ListNew />
					</div>
					<div className="">
						<Heading>CÁC ĐƠN VỊ ĐỐI TÁC</Heading>
						<ListPartner />
					</div>
				</div>
			</div>
		</main>
	);
}
