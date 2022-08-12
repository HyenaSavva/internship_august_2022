import Header from "../../components/common/header/Header";
import Container from "@mui/material/Container";
import Card from "../../components/common/card/Card";
import Carousel from "components/carousel/Carousel";

import CardsData from "../../assets/data/dummy.json";

import HomePageStyles from "./HomePageStyles";
import { customContainer } from "./HomePageStyles";

function HomePage() {
	var bigCategory = CardsData.filter((card, index) => {
		if (card.category === "Big Houses") {
			return card;
		}
	});

	var smallCategory = CardsData.filter((card, index) => {
		if (card.category === "Small Houses") {
			return card;
		}
	});
	var officesCategory = CardsData.filter((card, index) => {
		if (card.category === "Offices") {
			return card;
		}
	});
	var apartmentsCategory = CardsData.filter((card, index) => {
		if (card.category === "Apartments") {
			return card;
		}
	});

	const sortedDate = [...CardsData].sort(
		(objA, objB) => Number(new Date(objB.date)) - Number(new Date(objA.date))
	);
	// const jsonDate = new Date(objB.date);
	// console.log(jsonDate.getDay());
	// console.log(typeof JSON.parse(jsonDate));
	console.log(CardsData);
	console.log(sortedDate);

	return (
		<div className="main">
			<Container maxWidth="lg">
				<Header />
			</Container>
			<Container sx={customContainer}>
				<h1 className="main">What are you interested in?</h1>
				<Carousel category={"Latest"} data={sortedDate} />
				<Carousel category={bigCategory[0].category} data={bigCategory} />
				<Carousel category={smallCategory[0].category} data={smallCategory} />
				<Carousel category={officesCategory[0].category} data={officesCategory} />
				<Carousel
					category={apartmentsCategory[0].category}
					data={apartmentsCategory}
				/>
			</Container>
			<style jsx>{HomePageStyles}</style>
		</div>
	);
}

export default HomePage;
