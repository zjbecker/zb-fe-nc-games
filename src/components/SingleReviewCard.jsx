import { useState } from "react";
import { patchReviewVotes } from "./api";

export const SingleReviewCard = ({
  title,
  category,
  designer,
  owner,
  review_body,
  review_img_url,
  votes,
  created_at,
  review_id,
}) => {
  const [voteCount, setVoteCount] = useState(votes);
  const [hasLiked, setHasLiked] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const formattedDate = created_at.split("T")[0].split("-").reverse().join("-");

  const likeButtonHandler = () => {
    const update = hasLiked ? -1 : +1;
    setHasLiked((curr) => !curr);
    setVoteCount((curr) => curr + update);
    patchReviewVotes(review_id, update).catch((err) => {
      setVoteCount((curr) => curr - update);
      setErrMessage("Something went wrong: Vote update not saved");
      setTimeout(() => setErrMessage(""), 4000);
    });
  };

  return (
    <main className="single-review">
      <img src={review_img_url} alt={title}></img>
      <h2>{title}</h2>
      <h3>Designed by: {designer}</h3>
      <p>{review_body}</p>
      <h4>
        Review by: {owner} Written on: {formattedDate}
      </h4>
      <h4>Votes: {voteCount}</h4>
      <button className="like-button" onClick={likeButtonHandler}>
        {hasLiked ? (
          <label>
            Remove Vote
            <span class="material-symbols-outlined">sentiment_satisfied</span>
          </label>
        ) : (
          <label>
            Add Vote
            <span class="material-symbols-outlined">
              sentiment_dissatisfied
            </span>
          </label>
        )}
      </button>
      {errMessage ? <p>{errMessage}</p> : null}
    </main>
  );
};
