import Header from "../../components/common/header/Header";
import TabsRow from "components/common/tabs/TabsRow";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { useSelector } from "react-redux";
import Card from "components/common/card/Card";
import CardRow from "components/common/card/CardRow";

import FavoritesPageStyles from "./FavoritesPageStyles";
import PaginationSquared from "components/pagination/Pagination";
import usePagination from "hooks/usePagination";
import { useEffect, useState } from "react";

import { fetchListingsData } from "services/listingsFetch";
import { filterLocation, filterPrice, orderBy } from "services/utils";

const FavoritesPage = () => {
  const isGridView = useSelector((state) => state.gridView.isGridView);
  const [listings, setListings] = useState([]);

  const [cards, setCards] = useState(listings);

  useEffect(() => {
    // fetchListingsData returns a promise - we use ".then" to get the data from the promise
    fetchListingsData().then((data) => setListings(data));
  }, []);

  let { currentPageData, pageCount, handlePageChange } =
    usePagination(listings);

  // FILTER LOCATION
  const handleFilterLocation = (locations) => {
    let filteredArray = filterLocation(locations, listings);
    setCards(filteredArray);
  };

  // FILTER PRICE
  const handleFilterPrice = (price) => {
    let filteredArray = filterPrice(price, cards, listings);
    setCards(filteredArray);
  };

  // ORDER BY
  const handleOrderBy = (sortOption) => {
    let sortedBy = orderBy(sortOption, listings);
    setCards(sortedBy);
  };

  return (
    <div className="main">
      <Container maxWidth="lg">
        <Header />
      </Container>

      <Container sx={{ maxWidth: "lg" }}>
        <h1 className="main">Favourites</h1>
        <TabsRow
          filterLocation={handleFilterLocation}
          filterPrice={handleFilterPrice}
          orderBy={handleOrderBy}
        />
        {isGridView && (
          <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
            {currentPageData.map((card, index) => {
              return (
                <Grid item xs={2} sm={3} md={3} key={index}>
                  <Card
                    id={card.id}
                    isFavorite={card.isFavorite}
                    last={false}
                    title={card.title}
                    location={card.location}
                    price={card.price}
                    description={card.shortDescription}
                    images={card.images}
                  />
                </Grid>
              );
            })}
          </Grid>
        )}
        {!isGridView && (
          <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
            {currentPageData.map((card, index) => {
              return (
                <Grid item xs={3} sm={6} md={12} key={index}>
                  <CardRow
                    id={card.id}
                    isFavorite={card.isFavorite}
                    last={false}
                    title={card.title}
                    location={card.location}
                    price={card.price}
                    description={card.shortDescription}
                    images={card.images}
                  />
                </Grid>
              );
            })}
          </Grid>
        )}
        {listings.length > 0 && (
          <PaginationSquared
            pageCount={pageCount}
            handlePageChange={handlePageChange}
          />
        )}
      </Container>
      <style jsx>{FavoritesPageStyles}</style>
    </div>
  );
};

export default FavoritesPage;
