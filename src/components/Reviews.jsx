import { useEffect, useState } from "react";
import { ReviewsFilterMenu } from "./ReviewsFilterMenu";
import { getReviewsData } from "./api";
import { ReviewCard } from "./ReviewCard";
import { LoadingAnimation } from "./LoadingAnimation";

export const Reviews = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getReviewsData(null, null, null, null).then((reviews) => {
      setReviewsData(reviews);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <LoadingAnimation />;

  return (
    <main>
      <ReviewsFilterMenu />
      <ul className="reviews-list">
        {reviewsData.map((review) => {
          return <ReviewCard key={review.review_id} {...review} />;
        })}
      </ul>
    </main>
  );
};
