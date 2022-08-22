import Header from "../../components/common/header/Header";
import TabsRow from "components/common/tabs/TabsRow";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { useSelector } from "react-redux";
import Card from "components/common/card/Card";
import CardRow from "components/common/card/CardRow";

import usePagination from "hooks/usePagination";
import CategoryPageStyles from "./CategoryPageStyles";
import PaginationSquared from "components/pagination/Pagination";

import { fetchListingsData } from "services/listingsFetch";
import {
  handleFilterLocation,
  handleFilterPrice,
  handleOrderBy,
} from "services/utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { filterByCategory } from "services/utils";

const CategoryPage = (props) => {
  const isGridView = useSelector((state) => state.gridView.isGridView);

  let params = useParams();
  const [listings, setListings] = useState([]);
  const [cards, setCards] = useState([]);
  const [prevCards, setPrevCards] = useState([]);

  useEffect(() => {
    // fetchListingsData returns a promise - we use ".then" to get the data from the promise
    fetchListingsData().then((data) => {
      setListings(data);
      setCards(data);
    });
  }, []);
  /**
   * Cum lucreaza filtrul?
   * 1. Daca nu am selectat nimic, imi revine la array-ul principal, care este:
   *  - cel de categorie pentru Category page
   *  - cel de favorite pentru Favorites page
   *  - cel de searchData pentru Search page
   *
   * 2. Dupa ce selectez un filtru, si vreau sa selectez si urmatorul vreau:
   *  - sa mi se faca filtrarea pe array-ul deja filtrat, nu sa mi se distorsioneze datele si sa o ia de la capat
   * Cum fac asta?
   * - la apelul functiei de filtrare, trimit array-ul actual, nu cel initial
   */
  const categData = filterByCategory(params.name, listings);

  const { currentPageData, pageCount, handlePageChange } = usePagination(cards);

  return (
    <div className="main">
      <Container maxWidth="lg">
        <Header />
      </Container>

      <Container sx={{ maxWidth: "lg" }}>
        <TabsRow
          filterLocation={(sort) => {
            setPrevCards(cards);
            setCards(handleFilterLocation(sort, listings, prevCards));
          }}
          filterPrice={(sort) => {
            setPrevCards(cards);
            setCards(handleFilterPrice(sort, cards, prevCards));
          }}
          orderBy={(sort) => setCards(handleOrderBy(sort, cards))}
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
                <Grid item xs={2} sm={3} md={12} key={index}>
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
        {cards.length > 0 && (
          <PaginationSquared
            pageCount={pageCount}
            handlePageChange={handlePageChange}
          />
        )}
      </Container>
      <style jsx>{CategoryPageStyles}</style>
    </div>
  );
};

export default CategoryPage;
