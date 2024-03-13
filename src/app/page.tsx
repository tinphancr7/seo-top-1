"use client";
import Card from "@/components/card/Card";
import Hero from "@/containers/Hero";
import Hero2 from "@/containers/Hero2";
import Hero3 from "@/containers/Hero3";
import Image from "next/image";
import {useEffect} from "react";

export default function Home() {
	useEffect(() => {
		const links = document.getElementsByClassName("example_wrapper");

		const handleMouseOver = (event) => {
			const hoveredPos = parseInt(event.currentTarget.dataset.order);

			for (let i = 0; i < links.length; i++) {
				const link = links[i];
				const linkPos = parseInt(link.dataset.order);

				if (linkPos !== hoveredPos && linkPos > hoveredPos) {
					link.classList.add("shiftDown");
				}
				if (linkPos !== hoveredPos && linkPos < hoveredPos) {
					link.classList.add("shiftUp");
				}
			}
		};

		const handleMouseOut = () => {
			for (let i = 0; i < links.length; i++) {
				const link = links[i];
				link.classList.remove("shiftDown");
				link.classList.remove("shiftUp");
			}
		};

		for (let i = 0; i < links.length; i++) {
			links[i].addEventListener("mouseover", handleMouseOver);
			links[i].addEventListener("mouseout", handleMouseOut);
		}

		// Cleanup event listeners on component unmount
		return () => {
			for (let i = 0; i < links.length; i++) {
				links[i].removeEventListener("mouseover", handleMouseOver);
				links[i].removeEventListener("mouseout", handleMouseOut);
			}
		};
	}, []); // Empty dependency array ensures the effect runs only once on mount

	return (
		<main className=" w-full  ">
			{/* <Hero />
			<Hero2 />
			<Hero3 /> */}

			{/* <section className="carousel">
				<div className="carousel__container">
					<Card />
					<div className="carousel-item">
						<img
							className="carousel-item__img"
							src="https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
							alt="people"
						/>
						<div className="carousel-item__details">
							<div className="controls">
								<span className="fas fa-play-circle"></span>
								<span className="fas fa-plus-circle"></span>
							</div>
							<h5 className="carousel-item__details--title">
								Descriptive Title
							</h5>
							<h6 className="carousel-item__details--subtitle">
								Date and Duration
							</h6>
						</div>
					</div>
					<div className="carousel-item">
						<img
							className="carousel-item__img"
							src="https://images.pexels.com/photos/1785001/pexels-photo-1785001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
							alt="people"
						/>
						<div className="carousel-item__details">
							<div className="controls">
								<span className="fas fa-play-circle"></span>
								<span className="fas fa-plus-circle"></span>
							</div>
							<h5 className="carousel-item__details--title">
								Descriptive Title
							</h5>
							<h6 className="carousel-item__details--subtitle">
								Date and Duration
							</h6>
						</div>
					</div>
					<div className="carousel-item">
						<img
							className="carousel-item__img"
							src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt="people"
						/>
						<div className="carousel-item__details">
							<div className="controls">
								<span className="fas fa-play-circle"></span>
								<span className="fas fa-plus-circle"></span>
							</div>
							<h5 className="carousel-item__details--title">
								Descriptive Title
							</h5>
							<h6 className="carousel-item__details--subtitle">
								Date and Duration
							</h6>
						</div>
					</div>
					<div className="carousel-item">
						<img
							className="carousel-item__img"
							src="https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
							alt="people"
						/>
						<div className="carousel-item__details">
							<div className="controls">
								<span className="fas fa-play-circle"></span>
								<span className="fas fa-plus-circle"></span>
							</div>
							<h5 className="carousel-item__details--title">
								Descriptive Title
							</h5>
							<h6 className="carousel-item__details--subtitle">
								Date and Duration
							</h6>
						</div>
					</div>
					<div className="carousel-item">
						<img
							className="carousel-item__img"
							src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt="people"
						/>
						<div className="carousel-item__details">
							<div className="controls">
								<span className="fas fa-play-circle"></span>
								<span className="fas fa-plus-circle"></span>
							</div>
							<h5 className="carousel-item__details--title">
								Descriptive Title
							</h5>
							<h6 className="carousel-item__details--subtitle">
								Date and Duration
							</h6>
						</div>
					</div>
					<div className="carousel-item">
						<img
							className="carousel-item__img"
							src="https://images.pexels.com/photos/6945/sunset-summer-golden-hour-paul-filitchkin.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
							alt="people"
						/>
						<div className="carousel-item__details">
							<div className="controls">
								<span className="fas fa-play-circle"></span>
								<span className="fas fa-plus-circle"></span>
							</div>
							<h5 className="carousel-item__details--title">
								Descriptive Title
							</h5>
							<h6 className="carousel-item__details--subtitle">
								Date and Duration
							</h6>
						</div>
					</div>

					<div className="carousel-item">
						<img
							className="carousel-item__img"
							src="https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
							alt="people"
						/>
						<div className="carousel-item__details">
							<div className="controls">
								<span className="fas fa-play-circle"></span>
								<span className="fas fa-plus-circle"></span>
							</div>
							<h5 className="carousel-item__details--title">
								Descriptive Title
							</h5>
							<h6 className="carousel-item__details--subtitle">
								Date and Duration
							</h6>
						</div>
					</div>
				</div>
			</section> */}
			<div className="flex items-center justify-between">
				{/* <div className="example_wrapper" data-order="1">
					<p className="title_main_text">What is cancer?</p>
					<hr />
					<p className="title_sub_text">Cancer is not just one disease</p>
				</div> */}
				<Card dataOrder="1" />
				<Card dataOrder="2" />
				<Card dataOrder="3" />
				<Card dataOrder="4" />
				<Card dataOrder="5" />
				<Card dataOrder="6" />
				{/* <div className="example_wrapper" data-order="1">
					<p className="title_main_text">What is cancer?</p>
					<hr />
					<p className="title_sub_text">Cancer is not just one disease</p>
				</div>
				<div className="example_wrapper" data-order="2">
					<p className="title_main_text">What is cancer?</p>
					<hr />
					<p className="title_sub_text">Cancer is not just one disease</p>
				</div>
				<div className="example_wrapper" data-order="3">
					<p className="title_main_text">What is cancer?</p>
					<hr />
					<p className="title_sub_text">Cancer is not just one disease</p>
				</div>
				<div className="example_wrapper" data-order="4">
					<p className="title_main_text">What is cancer?</p>
					<hr />
					<p className="title_sub_text">Cancer is not just one disease</p>
				</div>
				<div className="example_wrapper" data-order="5">
					<p className="title_main_text">What is cancer?</p>
					<hr />
					<p className="title_sub_text">Cancer is not just one disease</p>
				</div> */}
			</div>
		</main>
	);
}
