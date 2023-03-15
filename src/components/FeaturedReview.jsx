import { LoadingAnimation } from "./LoadingAnimation";
import { useState, useEffect } from "react";
import { getReviewsData } from "./api";
import { ReviewCard } from "./ReviewCard";

export const FeaturedReview = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [reviewData, setReviewData] = useState({});

  useEffect(() => {
    setIsLoading(true);
    getReviewsData(null, "votes", null, 1).then((review) => {
      setReviewData(review[0]);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <LoadingAnimation />;

  return (
    <article className="reviews-list">
      <h2>Most popular review this month</h2>
      <ReviewCard {...reviewData} />
    </article>
  );
};
