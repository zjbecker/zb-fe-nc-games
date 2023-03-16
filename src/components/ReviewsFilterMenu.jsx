import { useState, useEffect } from "react";
import { getCategories } from "./api";

export const ReviewsFilterMenu = ({
  categoryQuery,
  setCategoryQuery,
  sortByQuery,
  setSortByQuery,
  orderQuery,
  setOrderQuery,
  deleteCategoryQuery,
}) => {
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getCategories().then((categories) => {
      setCategoryOptions(categories);
      setIsLoading(false);
    });
  }, []);

  const formatSlug = (slug) => {
    return slug
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };

  if (isLoading) return <p>loading...</p>;

  return (
    <form>
      <label htmlFor="category-select">Category</label>
      <select
        id="category-select"
        value={categoryQuery || ""}
        onChange={(e) => {
          if (e.target.value === "all") {
            deleteCategoryQuery();
          } else {
            setCategoryQuery(e.target.value);
          }
        }}
      >
        <option value="all">All</option>
        {categoryOptions.map(({ slug }) => {
          return (
            <option key={slug} value={slug}>
              {formatSlug(slug)}
            </option>
          );
        })}
      </select>

      <label htmlFor="sort-by-select">Sort By:</label>
      <select
        id="sort-by-select"
        value={sortByQuery || ""}
        onChange={(e) => {
          setSortByQuery(e.target.value);
        }}
      >
        <option value="created_at">Date Written</option>
        <option value="title">Title</option>
        <option value="category">Category</option>
        <option value="votes">Votes</option>
        <option value="designer">Designer</option>
        <option value="comment_count">Comments</option>
      </select>

      <label htmlFor="order-select">Order:</label>
      <select
        id="order-select"
        value={orderQuery || "DESC"}
        onChange={(e) => setOrderQuery(e.target.value)}
      >
        <option value="desc">DESC</option>
        <option value="asc">ASC</option>
      </select>
    </form>
  );
};
