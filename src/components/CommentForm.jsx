import { useState, useContext } from "react";
import { UserContext } from "../User";
import { postComment } from "./api";

export const CommentForm = ({ review_id, setCommentsData }) => {
  const { user } = useContext(UserContext);
  const [newMessage, setNewMessage] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const username = user.username;

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (!newMessage) {
      setErrMessage("Please input your comment");
      setTimeout(() => setErrMessage(""), 3000);
      return;
    }

    postComment(review_id, username, newMessage)
      .then((comment_id) => {
        setCommentsData((curr) => {
          const update = {
            author: username,
            body: newMessage,
            votes: 0,
            isAuthor: true,
            comment_id,
          };
          return [update, ...curr];
        });
        setNewMessage("");
      })
      .catch(() => {
        setErrMessage("Something went wrong: comment has not been submitted");
        setTimeout(() => setErrMessage(""), 5000);
      });
  };

  return (
    <form onSubmit={submitFormHandler} className="comment-form">
      <label htmlFor="comment-input">Comment: </label>
      <input
        type="text"
        className="comment-input"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button>submit comment</button>
      {errMessage ? <p>{errMessage}</p> : null}
    </form>
  );
};
