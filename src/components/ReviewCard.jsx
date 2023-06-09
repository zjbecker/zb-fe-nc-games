import { Link } from "react-router-dom";

export const ReviewCard = ({
  review_img_url,
  title,
  designer,
  votes,
  review_id,
  comment_count,
  created_at,
  category,
}) => {
  const formattedDate = new Date(created_at)
    .toString()
    .split(" ")
    .slice(1, 4)
    .join(" ");
  return (
    <li className="review-card">
      <Link to={`/reviews/${review_id}`} className="read-more">
        <img className="review-card_img" src={review_img_url} alt={title}></img>
        <h2 className="review-card_h2">{title}</h2>
        <h3 className="review-card_h3">Category: {category}</h3>
        <h3 className="review-card_h3">Designed by:{designer}</h3>
        <h4 className="review-card_h4">Written: {formattedDate}</h4>
        <h4 className="review-card_h4">Votes: {votes}</h4>
        <h4 className="review-card_h4">Comments: {comment_count}</h4>
      </Link>
    </li>
  );
};
