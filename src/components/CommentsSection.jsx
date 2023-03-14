import { CommentCard } from "./CommentCard";
import { CommentForm } from "./CommentForm";
import { LoadingAnimation } from "./LoadingAnimation";
import { useState, useEffect } from "react";
import { getCommentsData } from "./api";
import { useParams } from "react-router-dom";

export const CommentsSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [commentsData, setCommentsData] = useState([]);
  const [optiComment, setOptiComment] = useState(null);
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
      <CommentForm setOptiComment={setOptiComment} review_id={review_id} />
      <ul className="comment-list">
        {optiComment ? <CommentCard {...optiComment} /> : null}
        {commentsData.map((comment) => {
          return <CommentCard key={comment.comment_id} {...comment} />;
        })}
      </ul>
    </section>
  );
};
