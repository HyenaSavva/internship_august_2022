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
  verifyFavorite,
} from "services/utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { filterByCategory } from "services/utils";
import CardRowUser from "components/common/card/CardRowUser";

const CategoryPage = (props) => {
  const isGridView = useSelector((state) => state.gridView.isGridView);

  let params = useParams();
  const [listings, setListings] = useState([]);
  const [cards, setCards] = useState([]);
  const [categData, setCategData] = useState([]);

  useEffect(() => {
    // fetchListingsData returns a promise - we use ".then" to get the data from the promise
    fetchListingsData().then((data) => {
      setListings(data);
    });
  }, []);

  useEffect(() => {
    setCategData(filterByCategory(params.name, listings));
    setCards(filterByCategory(params.name, listings));
  }, [listings]);

  const { currentPageData, pageCount, handlePageChange } = usePagination(cards);

  return (
    <div className="main">
      <Container sx={{ maxWidth: "lg" }}>
        <TabsRow
          filterLocation={(sort) => {
            setCards(handleFilterLocation(sort, categData, categData));
          }}
          filterPrice={(sort) => {
            setCards(handleFilterPrice(sort, cards, categData));
          }}
          orderBy={(sort) => setCards(handleOrderBy(sort, categData))}
        />

        {isGridView && (
          <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
            {currentPageData.map((card, index) => {
              return (
                <Grid item xs={2} sm={3} md={3} key={index}>
                  <Card
                    id={card.id}
                    isFavorite={verifyFavorite(card)}
                    last={false}
                    title={card.title}
                    location={card.location}
                    price={card.price}
                    description={card.description}
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
                  <CardRowUser
                    id={card.id}
                    isFavorite={verifyFavorite(card)}
                    last={false}
                    title={card.title}
                    location={card.location}
                    price={card.price}
                    description={card.description}
                    images={card.images}
                    phone={card.phone}
                    category={card.category}
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
