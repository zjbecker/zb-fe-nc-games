import { useState } from "react";
import { deleteCommentbyId } from "./api";

export const CommentCard = ({
  author,
  body,
  votes,
  isAuthor,
  comment_id,
  setCommentsData,
}) => {
  const [errMessage, setErrMessage] = useState("");

  const deleteHandler = (idToDelete) => {
    deleteCommentbyId(comment_id)
      .then(() => {
        setCommentsData((curr) => {
          return curr.filter(({ comment_id }) => comment_id !== idToDelete);
        });
      })
      .catch(() => {
        setErrMessage('"Something went wrong: comment has not been removed"');
        setTimeout(() => setErrMessage(""), 5000);
      });
  };

  const deleteBtn = (
    <button
      onClick={() => {
        deleteHandler(comment_id);
      }}
    >
      <span role="img" aria-label="add vote">
        remove ❌
      </span>
    </button>
  );

  const voteBtn = (
    <span role="img" aria-label="add vote">
      👍{votes}
    </span>
  );

  return (
    <li className="comment-card">
      <h3>{author} said:</h3>
      <p>{body}</p>
      {isAuthor ? <h4>{deleteBtn}</h4> : <h4>{voteBtn}</h4>}
      {errMessage ? <p>{errMessage}</p> : null}
    </li>
  );
};
