import { useEffect, useState } from "react";
import { ReviewsFilterMenu } from "./ReviewsFilterMenu";
import { getReviewsData } from "./api";
import { ReviewCard } from "./ReviewCard";
import { LoadingAnimation } from "./LoadingAnimation";

export const Reviews = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [reviewsData, setReviewsData] = useState([]);
  const [categorySearch, setCategorySearch] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getReviewsData(categorySearch, null, null, null).then((reviews) => {
      setReviewsData(reviews);
      setIsLoading(false);
    });
  }, [categorySearch]);

  if (isLoading) return <LoadingAnimation />;

  return (
    <main>
      <ReviewsFilterMenu setCategorySearch={setCategorySearch} />
      <ul className="reviews-list">
        {reviewsData.map((review) => {
          return <ReviewCard key={review.review_id} {...review} />;
        })}
      </ul>
    </main>
  );
};
