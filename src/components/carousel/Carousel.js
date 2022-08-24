import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Grid } from "@mui/material";

import Card from "components/common/card/Card";

import CarouselStyles from "./CarouselStyles";
import { customArrowLeft, customArrowRight } from "./CarouselStyles";
import { verifyFavorite } from "services/utils";

const Carousel = ({ category, categoryValue, data }) => {
  const slidesToShow = 4;

  const PreviousBtn = (props) => {
    const { className, onClick, currentSlide } = props;
    return (
      <>
        {currentSlide !== 0 && (
          <div className={className} onClick={onClick}>
            <ArrowBackIosIcon sx={customArrowLeft} />
          </div>
        )}
      </>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick, slideCount, currentSlide } = props;
    return (
      <>
        {currentSlide !== slideCount - slidesToShow && (
          <div className={className} onClick={onClick}>
            <ArrowForwardIosIcon sx={customArrowRight} />
          </div>
        )}
      </>
    );
  };

  const settings = {
    accessibility: true,
    arrows: true,
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
          mobileFirst: true,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
          mobileFirst: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          mobileFirst: true,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          mobileFirst: true,
        },
      },
    ],
  };

  return (
    <div className="carousel-category">
      <div className="flex categ-everything">
        <h2 className="categ-title"> {category} </h2>
        <div className="btn-everything">
          <Link
            to={`/category/${categoryValue}`}
            style={{ textDecoration: "none", color: "0241ae" }}
          >
            <div className="flex">
              <p
                style={{
                  color: "0241ae",
                }}
              >
                See everything
              </p>
              <p className="arrow-icon">
                <ArrowForwardIcon />
              </p>
            </div>
          </Link>
        </div>
      </div>
      <Slider {...settings}>
        {data.map((card, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <Link
                to={`/listing-page/${card.id}`}
                style={{ textDecoration: "none" }}
              >
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
              </Link>
            </Grid>
          );
        })}
        <Link to={`/category/${category}`} style={{ textDecoration: "none" }}>
          <Card last={true} />
        </Link>
      </Slider>
      <style jsx>{CarouselStyles}</style>
    </div>
  );
};

export default Carousel;
