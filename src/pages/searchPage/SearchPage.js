import Header from "../../components/common/header/Header";
import TabsRow from "components/common/tabs/TabsRow";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { useSelector } from "react-redux";
import Card from "components/common/card/Card";
import CardRow from "components/common/card/CardRow";

import FavoritesPageStyles from "pages/favoritesPage/FavoritesPageStyles";
import PaginationSquared from "components/pagination/Pagination";
import usePagination from "hooks/usePagination";

import {
  handleFilterLocation,
  handleFilterPrice,
  handleOrderBy,
  verifyFavorite,
} from "services/utils";
import { useState } from "react";
import CardRowUser from "components/common/card/CardRowUser";

const SearchPage = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const user = JSON.parse(localStorage.getItem("userId"));

  const searchInput = useSelector((state) => state.search.searchInput);
  const isGridView = useSelector((state) => state.gridView.isGridView);
  const searchData = useSelector((state) => state.search.searchData);

  const [cards, setCards] = useState(searchData);

  let { currentPageData, pageCount, handlePageChange } = usePagination(cards);

  return (
    <div className="main">
      <Container maxWidth="lg">
        <Header />
      </Container>

      <Container sx={{ maxWidth: "lg" }}>
        <h1 className="main">{`${searchData.length} results for "${
          searchInput !== "" ? searchInput : "all listings"
        }"`}</h1>
        <TabsRow
          filterLocation={(sort) =>
            setCards(handleFilterLocation(sort, searchData))
          }
          filterPrice={(sort) => {
            setCards(handleFilterPrice(sort, cards, searchData));
          }}
          orderBy={(sort) => setCards(handleOrderBy(sort, searchData))}
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
                <Grid item xs={3} sm={6} md={12} key={index}>
                  {!isLoggedIn && (
                    <CardRow
                      id={card.id}
                      isFavorite={verifyFavorite(card)}
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
                      isFavorite={verifyFavorite(card)}
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
        {searchData.length > 0 && (
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

export default SearchPage;
