import { useEffect, useState } from "react";
import { FilterMenu } from "./FilterMenu";
import { getReviewsData } from "./api";
import { ReviewCard } from "./ReviewCard";
import { LoadingAnimation } from "./LoadingAnimation";

export const Reviews = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getReviewsData().then((reviews) => {
      setReviewsData(reviews);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <LoadingAnimation />;

  return (
    <main>
      <FilterMenu />
      <ul className="reviews-list">
        {reviewsData.map((review) => {
          return <ReviewCard key={review.review_id} {...review} />;
        })}
      </ul>
    </main>
  );
};
