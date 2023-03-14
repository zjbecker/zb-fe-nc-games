import { CommentCard } from "./CommentCard";
import { CommentInput } from "./CommentInput";
import { LoadingAnimation } from "./LoadingAnimation";
import { useState, useEffect } from "react";
import { getCommentsData } from "./api";
import { useParams } from "react-router-dom";

export const CommentsSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [commentsData, setCommentsData] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getCommentsData(review_id).then((comments) => {
      setCommentsData(comments);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) return <LoadingAnimation />;

  return (
    <section className="comments-section">
      <CommentInput />
      <ul className="comment-list">
        {commentsData.map((comment) => {
          return <CommentCard key={comment.comment_id} {...comment} />;
        })}
      </ul>
    </section>
  );
};
