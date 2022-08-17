import Header from "../../components/common/header/Header";
import Container from "@mui/material/Container";

import Carousel from "components/carousel/Carousel";

import HomePageStyles from "./HomePageStyles";
import { useSelector } from "react-redux";

const categories = {
	BIG_HOUSES: "Big Houses",
	SMALL_HOUSES: "Small Houses",
	OFFICES: "Offices",
	APARTMENTS: "Apartments",
};

function HomePage() {
	const CardsData = useSelector((state) => state.favorite.listings);

	const filterByCategory = (category, cardData) => {
		return cardData.filter((card) => {
			return card.category === category ? card : undefined;
		});
	};

	const sortedDate = [...CardsData].sort(
		(objA, objB) => Number(new Date(objB.date)) - Number(new Date(objA.date))
	);

	return (
		<div>
			<Container maxWidth="lg">
				<Header />
			</Container>
			<div className="container">
				<Container sx={{ maxWidth: "lg" }}>
					<h1 className="main">What are you interested in?</h1>
					<Carousel category={"Latest"} data={sortedDate} />
					<Carousel
						category={categories.BIG_HOUSES}
						data={filterByCategory(categories.BIG_HOUSES, CardsData)}
					/>
					<Carousel
						category={categories.SMALL_HOUSES}
						data={filterByCategory(categories.SMALL_HOUSES, CardsData)}
					/>
					<Carousel
						category={categories.OFFICES}
						data={filterByCategory(categories.OFFICES, CardsData)}
					/>
					<Carousel
						category={categories.APARTMENTS}
						data={filterByCategory(categories.APARTMENTS, CardsData)}
					/>
				</Container>
			</div>
			<style jsx>{HomePageStyles}</style>
		</div>
	);
}

export default HomePage;
