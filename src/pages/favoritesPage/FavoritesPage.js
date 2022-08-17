import Header from "../../components/common/header/Header";
import TabsRow from "components/common/tabs/TabsRow";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { useSelector } from "react-redux";
import Card from "components/common/card/Card";
import CardRow from "components/common/card/CardRow";

import FavoritesPageStyles from "./FavoritesPageStyles";

const FavoritesPage = () => {
  const favoriteListings = useSelector((state) => state.favorite.favorites);
  const isGridView = useSelector((state) => state.gridView.isGridView);

  return (
    <div className="main">
      <Container maxWidth="lg">
        <Header />
      </Container>

      <Container sx={{ maxWidth: "lg" }}>
        <h1 className="main">Favourites</h1>
        <TabsRow />

        {isGridView && (
          <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
            {favoriteListings.map((card, index) => {
              return (
                <Grid item xs={2} sm={3} md={3} key={index}>
                  <Card
                    id={card.id}
                    isFavorite={card.isFavorite}
                    last={false}
                    title={card.title}
                    location={card.location}
                    price={card.price}
                    description={card.description}
                    image={card.image}
                  />
                </Grid>
              );
            })}
          </Grid>
        )}
        {!isGridView && (
          <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
            {favoriteListings.map((card, index) => {
              return (
                <Grid item xs={3} sm={6} md={12} key={index}>
                  <CardRow
                    id={card.id}
                    isFavorite={card.isFavorite}
                    last={false}
                    title={card.title}
                    location={card.location}
                    price={card.price}
                    description={card.description}
                    image={card.image}
                  />
                </Grid>
              );
            })}
          </Grid>
        )}
      </Container>
      <style jsx>{FavoritesPageStyles}</style>
    </div>
  );
};

export default FavoritesPage;
