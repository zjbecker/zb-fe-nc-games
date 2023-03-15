import { useState, useEffect } from "react";
import { getCategories } from "./api";

export const ReviewsFilterMenu = ({ setCategorySearch }) => {
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
        onChange={(e) => setCategorySearch(e.target.value)}
      >
        <option value={null}>All</option>
        {categoryOptions.map(({ slug }) => {
          return (
            <option key={slug} value={slug}>
              {formatSlug(slug)}
            </option>
          );
        })}
      </select>
    </form>
  );
};
