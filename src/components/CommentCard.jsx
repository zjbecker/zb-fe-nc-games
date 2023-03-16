import { useState } from "react";
import { deleteComment } from "./api";

export const CommentCard = ({
  author,
  body,
  votes,
  isAuthor,
  comment_id,
  setCommentsData,
}) => {
  const [alertMessage, setAlertMessage] = useState("");

  const deleteHandler = (idToDelete) => {
    setAlertMessage("Removing...");
    deleteComment(comment_id)
      .then(() => {
        setTimeout(() => {
          setAlertMessage("Message removed");
        }, 2000);
        setTimeout(() => {
          setCommentsData((curr) => {
            return curr.filter(({ comment_id }) => comment_id !== idToDelete);
          });
          setAlertMessage("");
        }, 4000);
      })
      .catch(() => {
        setAlertMessage("Something went wrong: comment has not been removed");
        setTimeout(() => setAlertMessage(""), 4000);
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
      {alertMessage ? <p className="alert">{alertMessage}</p> : <p>{body}</p>}
      {isAuthor ? <h4>{deleteBtn}</h4> : <h4>{voteBtn}</h4>}
    </li>
  );
};
