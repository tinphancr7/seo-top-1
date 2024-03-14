import Card from "@/components/card/Card";

import React, {Fragment, useEffect, useState} from "react";

const ListRank = ({name, order}) => {
	const [orderActive, setOrderActive] = useState(0);
	useEffect(() => {
		if (name === "master") {
			const links = document.getElementsByClassName("example_wrapper");
			// add background image to the element
			for (let i = 0; i < links.length; i++) {
				links[i].style.backgroundImage =
					"linear-gradient(1deg, rgba(45, 57, 143, 0.00) -0.3%, rgba(45, 57, 143, 0.35) 49.45%, rgba(45, 57, 143, 0.00) 99.54%)";
			}
			const handleMouseOver = (event) => {
				const hoveredPos = parseInt(event.currentTarget.dataset.order);
				setOrderActive(hoveredPos);

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
				setOrderActive(0);
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
		}
	}, [name]); // Empty dependency array ensures the effect runs only once on mount

	return (
		<div className="grid grid-cols-5 gap-5">
			{new Array(5).fill(0).map((item, index) => (
				<Fragment key={index}>
					<Card
						dataOrder={index + order}
						name={name}
						orderActive={orderActive}
					/>
				</Fragment>
			))}
		</div>
	);
};

export default ListRank;
