import { Link } from "react-router-dom";

export const ReviewCard = ({
  review_img_url,
  title,
  designer,
  votes,
  review_id,
  comment_count,
  created_at,
}) => {
  const formattedDate = created_at.split("T")[0].split("-").reverse().join("-");

  return (
    <li className="review-card">
      <Link to={`/reviews/${review_id}`} className="read-more">
        <img className="review-card_img" src={review_img_url} alt={title}></img>
        <h2 className="review-card_h2">{title}</h2>
        <h3 className="review-card_h3">Designed by:{designer}</h3>
        <h4 className="review-card_h4">Written: {formattedDate}</h4>
        <h4 className="review-card_h4">Votes: {votes}</h4>
        <h4 className="review-card_h4">Comments: {comment_count}</h4>
      </Link>
    </li>
  );
};
