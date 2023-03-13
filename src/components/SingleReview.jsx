import { SingleReviewCard } from "./SingleReviewCard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviewById } from "./api";
import { LoadingAnimation } from "./LoadingAnimation";

export const SingleReview = () => {
  const { review_id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [reviewData, setReviewData] = useState({});

  useEffect(() => {
    setIsLoading(true);
    getReviewById(review_id).then((review) => {
      setReviewData(review);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) return <LoadingAnimation />;

  return <SingleReviewCard {...reviewData} />;
};
