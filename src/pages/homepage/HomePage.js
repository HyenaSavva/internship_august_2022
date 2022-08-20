import Header from "../../components/common/header/Header";
import Container from "@mui/material/Container";

import Carousel from "components/carousel/Carousel";

import HomePageStyles from "./HomePageStyles";
import { fetchListingsData } from "services/listingsFetch";
import { useEffect, useState } from "react";

import TabsUserListings from "components/common/tabs/TabsUserListings";
import TabsAdminListings from "components/common/tabs/TamsAdminListings";

const categories = {
  BIG_HOUSES: "Big Houses",
  SMALL_HOUSES: "Small Houses",
  OFFICES: "Offices",
  APARTMENTS: "Apartments",
};

function HomePage() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // fetchListingsData returns a promise - we use ".then" to get the data from the promise
    fetchListingsData().then((data) => setListings(data));
  }, []);

  const filterByCategory = (category, cardData) => {
    return cardData.filter((card) => {
      return card.category === category ? card : undefined;
    });
  };

  const sortedDate = [...listings].sort(
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
          <TabsUserListings />
          {/* <TabsAdminListings /> */}
          <Carousel category={"Latest"} data={sortedDate} />
          <Carousel
            category={categories.BIG_HOUSES}
            data={filterByCategory(categories.BIG_HOUSES, listings)}
          />
          <Carousel
            category={categories.SMALL_HOUSES}
            data={filterByCategory(categories.SMALL_HOUSES, listings)}
          />
          <Carousel
            category={categories.OFFICES}
            data={filterByCategory(categories.OFFICES, listings)}
          />
          <Carousel
            category={categories.APARTMENTS}
            data={filterByCategory(categories.APARTMENTS, listings)}
          />
        </Container>
      </div>
      <style jsx>{HomePageStyles}</style>
    </div>
  );
}

export default HomePage;
