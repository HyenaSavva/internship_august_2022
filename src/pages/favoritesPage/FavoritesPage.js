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

import {
  handleFilterLocation,
  handleFilterPrice,
  handleOrderBy,
} from "services/utils";
import { fetchFavoritesData } from "services/listingsFetch";

const FavoritesPage = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const isGridView = useSelector((state) => state.gridView.isGridView);
  const [listings, setListings] = useState([]);
  const [fetchData, setFetchData] = useState([]);

  const user = JSON.parse(localStorage.getItem("userId"));

  const [cards, setCards] = useState(listings);

  useEffect(() => {
    // fetchListingsData returns a promise - we use ".then" to get the data from the promise
    fetchFavoritesData().then((data) => {
      setFetchData(data);
      localStorage.setItem("favorites", JSON.stringify(data));
    });
  }, []);

  let { currentPageData, pageCount, handlePageChange } =
    usePagination(fetchData);

  return (
    <div className="main">
      <Container maxWidth="lg">
        <Header />
      </Container>

      <Container sx={{ maxWidth: "lg" }}>
        <h1 className="main">Favourites</h1>
        <TabsRow
          filterLocation={(sort) =>
            setCards(handleFilterLocation(sort, listings))
          }
          filterPrice={(sort) => {
            setCards(handleFilterPrice(sort, cards, listings));
          }}
          orderBy={(sort) => setCards(handleOrderBy(sort, listings))}
        />

        {isGridView && (
          <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
            {currentPageData.map((card, index) => {
              return (
                <Grid item xs={2} sm={3} md={3} key={index}>
                  <Card
                    id={card.id}
                    isFavorite={true}
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
                  {isLoggedIn && (
                    <CardRow
                      id={card.id}
                      isFavorite={true}
                      last={false}
                      title={card.title}
                      location={card.location}
                      price={card.price}
                      description={card.shortDescription}
                      images={card.images}
                    />
                  )}
                </Grid>
              );
            })}
          </Grid>
        )}
        {fetchData.length > 0 && (
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
