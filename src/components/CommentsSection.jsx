import { CommentCard } from "./CommentCard";
import { CommentForm } from "./CommentForm";
import { LoadingAnimation } from "./LoadingAnimation";
import { useState, useEffect, useContext } from "react";
import { getCommentsData } from "./api";
import { useParams, NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../User";

export const CommentsSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [commentsData, setCommentsData] = useState([]);
  const [optiComment, setOptiComment] = useState(null);
  const { review_id } = useParams();
  const { user } = useContext(UserContext);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    getCommentsData(review_id).then((comments) => {
      setCommentsData(comments);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) return <LoadingAnimation />;
  if (!user) {
    return (
      <section>
        <h3>{`There are ${commentsData.length} comments, please log in to view and add comments`}</h3>
        <NavLink to={"/login"} state={{ prev: location.pathname }}>
          Log In
        </NavLink>
      </section>
    );
  }
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
