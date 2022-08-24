import { useState } from "react";

const PER_PAGE = 12;

const usePagination = (favoriteListings) => {
  const [currentPage, setCurrentPage] = useState(0);
  const offset = currentPage * PER_PAGE;

  const currentPageData = favoriteListings?.slice(offset, offset + PER_PAGE);

  const pageCount = Math.ceil(favoriteListings?.length / PER_PAGE);

  function handlePageChange(event, page) {
    setCurrentPage(page - 1);
  }

  return {
    currentPageData,
    pageCount,
    handlePageChange,
  };
};

export default usePagination;
