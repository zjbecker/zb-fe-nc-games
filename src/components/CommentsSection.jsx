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

  return (
    <section className="comments-section">
      {!user ? (
        <section className="not-logged-in">
          <h3>{`Please log in to add comments`}</h3>
          <NavLink to={"/login"} state={{ prev: location.pathname }}>
            Log In
          </NavLink>
        </section>
      ) : (
        <CommentForm review_id={review_id} setCommentsData={setCommentsData} />
      )}
      <ul className="comment-list">
        {commentsData.map((comment, i) => {
          return (
            <CommentCard
              key={i}
              {...comment}
              setCommentsData={setCommentsData}
              isAuthor={user ? comment.author === user.username : false}
            />
          );
        })}
      </ul>
    </section>
  );
};
