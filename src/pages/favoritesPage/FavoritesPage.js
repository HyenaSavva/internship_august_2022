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
import { fetchFavoritesData, singleListingData } from "services/listingsFetch";
import CardRowUser from "components/common/card/CardRowUser";

const FavoritesPage = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const isGridView = useSelector((state) => state.gridView.isGridView);
  const [listings, setListings] = useState([]);
  const [fetchData, setFetchData] = useState([]);
  const [cardData, setCardData] = useState({});

  const [cards, setCards] = useState(listings);

  useEffect(() => {
    let result = [];
    // fetchListingsData returns a promise - we use ".then" to get the data from the promise
    fetchFavoritesData().then((data) => {
      setFetchData(data);
      data.map((item) => {
        const singleItem = async () => {
          const card = await singleListingData(item.listingId);
          setCardData(card);
          result.push(card);
          return card;
        };
        singleItem();
        return cardData;
      });
    });
  }, []);

  let { currentPageData, pageCount, handlePageChange } = usePagination(cards);

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
                  {!isLoggedIn && (
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
                  )}
                  {isLoggedIn && (
                    <CardRowUser
                      id={card.id}
                      isFavorite={card.isFavorite}
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
        {cards.length > 0 && (
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
