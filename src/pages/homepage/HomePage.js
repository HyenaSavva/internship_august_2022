import Header from "../../components/common/header/Header";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import Carousel from "components/carousel/Carousel";

import HomePageStyles from "./HomePageStyles";
import {
  fetchListingsData,
  fetchUser,
  deleteListing,
  fetchMyListingsData,
} from "services/listingsFetch";
import { useEffect, useState } from "react";

import TabsUserListings from "components/common/tabs/TabsUserListings";
import TabsAdminListings from "components/common/tabs/TabsAdminListings";
import TabsRow from "components/common/tabs/TabsRow";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { userActions } from "store/userSlice";
import CardRowUser from "components/common/card/CardRowUser";
import { Grid } from "@mui/material";

import {
  handleFilterLocation,
  handleFilterPrice,
  handleOrderBy,
  verifyFavorite,
} from "services/utils";
import usePagination from "@mui/material/usePagination/usePagination";
import PaginationSquared from "components/pagination/Pagination";
import { useNavigate } from "react-router-dom";

const categories = {
  BIG_HOUSES: "Big Houses",
  SMALL_HOUSES: "Small Houses",
  OFFICES: "Offices",
  APARTMENTS: "Apartments",
};

function HomePage() {
  const dispatch = useDispatch();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const user = JSON.parse(localStorage.getItem("userId"));
  const userData = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  // let favorites = JSON.parse(localStorage.getItem("favorites"));

  const [tabAllListings, setTabAllListings] = useState(true);

  const [allListings, setAllListings] = useState([]);
  const [myListings, setMyListings] = useState([]);
  const [cards, setCards] = useState(allListings);
  let token = "";

  if (isLoggedIn) {
    token = localStorage.getItem("token");
  }

  const handleAllListings = () => {
    setTabAllListings(true);
  };
  const handleMyListings = () => {
    setTabAllListings(false);
  };
  const handlePendingListings = () => {
    setTabAllListings(false);
  };
  const handleAdd = (event) => {
    navigate("/add-new");
    event.preventDefault();
  };

  const cardsMap = (
    <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
      {cards.map((card, index) => {
        return (
          <Grid item xs={3} sm={6} md={12} key={index}>
            {isLoggedIn && (
              <>
                <CardRowUser
                  approve={tabAllListings}
                  id={card.id}
                  isFavorite={verifyFavorite(card)}
                  last={false}
                  title={card.title}
                  location={card.location}
                  price={card.price}
                  description={card.description}
                  images={card.images}
                />
              </>
            )}
          </Grid>
        );
      })}
    </Grid>
  );
  const myListingsMap = (
    <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
      {myListings?.map((card, index) => {
        return (
          <Grid item xs={3} sm={6} md={12} key={index}>
            {isLoggedIn && (
              <CardRowUser
                approve={tabAllListings}
                id={card.id}
                isFavorite={verifyFavorite(card)}
                last={false}
                title={card.title}
                location={card.location}
                price={card.price}
                description={card.description}
                images={card.images}
              />
            )}
          </Grid>
        );
      })}
    </Grid>
  );

  useEffect(() => {
    // fetchListingsData returns a promise - we use ".then" to get the data from the promise
    fetchListingsData().then((data) => {
      setAllListings(data);
      setCards(data);
    });

    fetchMyListingsData().then((data) => {
      setMyListings(data);
    });

    if (token) {
      dispatch(userActions.getUserSuccess(jwtDecode(token)));
      fetchUser();
    }
  }, []);

  const filterByCategory = (category, cardData) => {
    return cardData.filter((card) => {
      return card.category === category ? card : undefined;
    });
  };

  const sortedDate = [...allListings].sort(
    (objA, objB) => Number(new Date(objB.date)) - Number(new Date(objA.date))
  );

  let { currentPageData, pageCount, handlePageChange } = usePagination(cards);

  return (
    <div>
      <Container maxWidth="lg">
        <Header />
      </Container>
      <div className="container">
        <Container sx={{ maxWidth: "lg" }}>
          {isLoggedIn && (
            <div className="main">
              <div className="flex welcome">
                <p>Welcome back, {userData?.fullName}</p>
                {user?.Role === "User" && (
                  <Button
                    onClick={handleAdd}
                    disableRipple
                    variant="contained"
                    sx={{
                      background: "#0356E8",
                      borderRadius: "8px",
                      width: "262px",
                      height: "44px",
                      textTransform: "none",
                      fontWeight: "600",
                    }}
                  >
                    Add new
                  </Button>
                )}
              </div>
            </div>
          )}
          {!isLoggedIn && <h1 className="main">What are you interested in?</h1>}
          {isLoggedIn && user?.Role === "User" && (
            <TabsUserListings
              tabAllListings={tabAllListings}
              handleAllListings={handleAllListings}
              handleMyListings={handleMyListings}
            />
          )}
          {isLoggedIn && user?.Role === "Admin" && (
            <TabsAdminListings
              tabAllListings={tabAllListings}
              handleAllListings={handleAllListings}
              handlePendingListings={handlePendingListings}
            />
          )}
          {isLoggedIn && user?.Role === "Admin" && (
            <TabsRow
              filterLocation={(sort) =>
                setCards(handleFilterLocation(sort, allListings))
              }
              filterPrice={(sort) => {
                setCards(handleFilterPrice(sort, cards, allListings));
              }}
              orderBy={(sort) => setCards(handleOrderBy(sort, allListings))}
            />
          )}
          {isLoggedIn && user?.Role === "User" && !tabAllListings && (
            <TabsRow
              filterLocation={(sort) =>
                setCards(handleFilterLocation(sort, allListings))
              }
              filterPrice={(sort) => {
                setCards(handleFilterPrice(sort, cards, allListings));
              }}
              orderBy={(sort) => setCards(handleOrderBy(sort, allListings))}
            />
          )}
          {/* TO BE CHANGED */}
          {tabAllListings && (
            <>
              {((user?.Role === "User" && isLoggedIn) || !isLoggedIn) && (
                <div>
                  <Carousel category={"Latest"} data={sortedDate} />
                  <Carousel
                    category={categories.BIG_HOUSES}
                    data={filterByCategory(categories.BIG_HOUSES, allListings)}
                  />
                  <Carousel
                    category={categories.SMALL_HOUSES}
                    data={filterByCategory(
                      categories.SMALL_HOUSES,
                      allListings
                    )}
                  />
                  <Carousel
                    category={categories.OFFICES}
                    data={filterByCategory(categories.OFFICES, allListings)}
                  />
                  <Carousel
                    category={categories.APARTMENTS}
                    data={filterByCategory(categories.APARTMENTS, allListings)}
                  />
                </div>
              )}
              {user?.Role === "Admin" && cardsMap}
            </>
          )}
          {!tabAllListings && (
            <>
              {((user?.Role === "User" && isLoggedIn) || !isLoggedIn) &&
                myListingsMap}
              {user?.Role === "Admin" && cardsMap}
            </>
          )}
          {!tabAllListings && cards.length > 0 && (
            <PaginationSquared
              pageCount={pageCount}
              handlePageChange={handlePageChange}
            />
          )}
        </Container>
      </div>
      <style jsx>{HomePageStyles}</style>
    </div>
  );
}

export default HomePage;
