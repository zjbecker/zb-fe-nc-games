import { getReviewsData } from "./api";
import { ReviewCard } from "./ReviewCard";
import { LoadingAnimation } from "./LoadingAnimation";
import { useState, useEffect } from "react";

export const ReviewsView = ({ categoryQuery, sortByQuery, orderQuery }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getReviewsData(categoryQuery, sortByQuery, orderQuery, 20).then(
      (reviews) => {
        setReviewsData(reviews);
        setIsLoading(false);
      }
    );
  }, [categoryQuery, sortByQuery, orderQuery]);

  if (isLoading) return <LoadingAnimation />;

  return (
    <ul className="reviews-list">
      {reviewsData.map((review) => {
        return <ReviewCard key={review.review_id} {...review} />;
      })}
    </ul>
  );
};
