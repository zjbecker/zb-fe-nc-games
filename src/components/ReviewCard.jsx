export const ReviewCard = ({ review_img_url, title, designer, votes }) => {
  return (
    <li className="review-card">
      <img src={review_img_url}></img>
      <h2>{title}</h2>
      <h3>Designed by:{designer}</h3>
      <h4>Votes: {votes}</h4>
    </li>
  );
};
