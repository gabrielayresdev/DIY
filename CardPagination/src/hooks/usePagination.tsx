import React from "react";

const usePagination = (max: number) => {
  const [page, setPage] = React.useState(0);

  const goNext = () => {
    if (page + 1 < max) setPage(page + 1);
  };

  const goBack = () => {
    if (page - 1 >= 0) setPage(page - 1);
  };

  const goTo = (page: number) => {
    if (page >= 0 && page < max) setPage(page);
  };

  return { page, goNext, goBack, goTo };
};

export default usePagination;
