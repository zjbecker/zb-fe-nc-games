import { ReviewsFilterMenu } from "./ReviewsFilterMenu";
import { useSearchParams } from "react-router-dom";
import { ReviewsView } from "./ReviewsView";

export const Reviews = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryQuery = searchParams.get("category");
  const sortByQuery = searchParams.get("sort-by");
  const orderQuery = searchParams.get("order");

  const setQuery = (queryName, newQuery) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(queryName, newQuery);
    setSearchParams(newParams);
  };
  const setSortByQuery = (sortBy) => setQuery("sort-by", sortBy);
  const setCategoryQuery = (category) => setQuery("category", category);
  const setOrderQuery = (order) => setQuery("order", order);

  const propsObj = {
    categoryQuery,
    setCategoryQuery,
    sortByQuery,
    setSortByQuery,
    orderQuery,
    setOrderQuery,
  };

  return (
    <main>
      <ReviewsFilterMenu {...propsObj} />
      <ReviewsView {...propsObj} />
    </main>
  );
};
