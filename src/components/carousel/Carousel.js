import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Grid } from "@mui/material";

import Card from "components/common/card/Card";

import CarouselStyles from "./CarouselStyles";
import { customArrowLeft, customArrowRight } from "./CarouselStyles";

const Carousel = ({ category, data }) => {
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
    slidesToScroll: 2,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };
  return (
    <div className="carousel-category">
      <h2> {category} </h2>
      <Slider {...settings}>
        {data.map((card, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <Link to="/listing-page" style={{ textDecoration: "none" }}>
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
              </Link>
            </Grid>
          );
        })}
        <Link to="/category" style={{ textDecoration: "none" }}>
          <Card last={true} />
        </Link>
      </Slider>
      <style jsx>{CarouselStyles}</style>
    </div>
  );
};

export default Carousel;
