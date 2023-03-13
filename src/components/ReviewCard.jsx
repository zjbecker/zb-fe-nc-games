import { Link } from "react-router-dom";

export const ReviewCard = ({
  review_img_url,
  title,
  designer,
  votes,
  review_id,
}) => {
  return (
    <li className="review-card">
      <Link to={`/reviews/${review_id}`} className="read-more">
        <img src={review_img_url} alt={title}></img>
        <h2>{title}</h2>
        <h3>Designed by:{designer}</h3>
        <h4>Votes: {votes}</h4>
      </Link>
    </li>
  );
};
