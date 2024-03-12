import Card from "@/components/card/Card";
import Hero from "@/containers/Hero";
import Hero2 from "@/containers/Hero2";
import Hero3 from "@/containers/Hero3";
import Image from "next/image";

export default function Home() {
	return (
		<main className=" w-full  ">
			<Hero />
			<Hero2 />
			<Hero3 />
		</main>
	);
}
