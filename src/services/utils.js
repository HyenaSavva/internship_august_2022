// FILTER LOCATION
export const filterLocation = (locations, cardListings) => {
  let filteredArray = [];
  if (locations.length) {
    locations.map((location) => {
      const newListings = cardListings.filter((card) => {
        return card.location.includes(location) ? card : undefined;
      });
      filteredArray = [...filteredArray, ...newListings];
    });
    filteredArray = [...new Set(filteredArray)];
  } else {
    filteredArray = cardListings;
  }
  return filteredArray;
};

// FILTER PRICE
export const filterPrice = (price, cards, prevCards) => {
  let filteredArray = [...cards];

  switch (price) {
    case "all":
      filteredArray = [...prevCards];

      break;
    case "price1":
      filteredArray = cards.filter((card) => {
        return parseInt(card.price) >= 0 && parseInt(card.price) <= 10000
          ? card
          : undefined;
      });
      break;
    case "price2":
      filteredArray = cards.filter((card) => {
        return parseInt(card.price) > 10000 && parseInt(card.price) <= 50000
          ? card
          : undefined;
      });
      break;
    case "price3":
      filteredArray = cards.filter((card) => {
        return parseInt(card.price) > 50000 && parseInt(card.price) <= 100000
          ? card
          : undefined;
      });
      break;
    case "price4":
      filteredArray = cards.filter((card) => {
        return parseInt(card.price) > 100000 && parseInt(card.price) <= 300000
          ? card
          : undefined;
      });
      break;
    case "price5":
      filteredArray = cards.filter((card) => {
        return parseInt(card.price) > 300000 && parseInt(card.price) <= 700000
          ? card
          : undefined;
      });
      break;
    case "price6":
      filteredArray = cards.filter((card) => {
        return parseInt(card.price) > 700000 && parseInt(card.price) <= 1000000
          ? card
          : undefined;
      });
      break;
    default:
      filteredArray = [...cards];
      break;
  }
  return filteredArray;
};

// ORDER BY
export const orderBy = (sortOption, cardListings) => {
  let sortedBy = [];
  switch (sortOption) {
    case "order1":
      sortedBy = [...cardListings].sort((objA, objB) => {
        return parseInt(objB.price) - parseInt(objA.price);
        //FIXME: Most Popular - TREBUIE MODIFICAT in functie de nr favorite de la postare
      });
      break;
    case "order2":
      sortedBy = [...cardListings].sort((objA, objB) => {
        return parseInt(objA.price) - parseInt(objB.price);
        // Price: Low to High
      });
      break;
    case "order3":
      sortedBy = [...cardListings].sort((objA, objB) => {
        return parseInt(objB.price) - parseInt(objA.price);
        // Price: High to Low
      });
      break;
    case "order4":
      sortedBy = [...cardListings].sort((objA, objB) => {
        return Number(new Date(objB.date)) - Number(new Date(objA.date));
        // Featured
      });
      break;
    default:
      sortedBy = [...sortedBy];
  }
  return sortedBy;
};

export const filterByCategory = (category, cardData) => {
  return cardData.filter((card) => {
    return card.category === category ? card : undefined;
  });
};

// FILTER LOCATION
export const handleFilterLocation = (locations, listings) => {
  return filterLocation(locations, listings);
};

// FILTER PRICE
export const handleFilterPrice = (price, cards, listings) => {
  return filterPrice(price, cards, listings);
};

// ORDER BY
export const handleOrderBy = (sortOption, listings) => {
  return orderBy(sortOption, listings);
};
