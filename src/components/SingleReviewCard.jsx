export const SingleReviewCard = ({
  title,
  designer,
  owner,
  review_body,
  review_img_url,
  votes,
  created_at,
  review_id,
}) => {
  const formattedDate = created_at.split("T")[0].split("-").reverse().join("-");

  return (
    <main className="single-review">
      <img src={review_img_url} alt={title}></img>
      <h2>{title}</h2>
      <h3>Designed by: {designer}</h3>
      <h4>Votes: {votes}</h4>
      <p>{review_body}</p>
      <p>
        Review by: {owner} Written on: {formattedDate}
      </p>
    </main>
  );
};
