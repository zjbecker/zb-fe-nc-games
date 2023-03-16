import { useState, useContext } from "react";
import { UserContext } from "../User";
import { postComment } from "./api";

export const CommentForm = ({ setOptiComment, review_id }) => {
  const { user } = useContext(UserContext);
  const [newMessage, setNewMessage] = useState("");
  const [errMessage, setErrMessage] = useState("");

  if (!user)
    return (
      <p>cannot write comment without logging in - update this with link</p>
    );
  const username = user.username;
  const submitFormHandler = (e) => {
    e.preventDefault();

    if (!newMessage) {
      setErrMessage("Please input your comment");
      setTimeout(() => setErrMessage(""), 3000);
      return;
    }
    setNewMessage("");
    setOptiComment({
      author: username,
      body: newMessage,
      votes: 0,
    });
    postComment(review_id, username, newMessage).catch(() => {
      setOptiComment(null);
      setErrMessage("Something went wrong: comment has not been submitted");
      setTimeout(() => setErrMessage(""), 5000);
    });
  };

  return (
    <form onSubmit={submitFormHandler} className="comment-form">
      <label htmlFor="comment-input">Comment: </label>
      <input
        type="text"
        id="comment-input"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button>submit comment</button>
      {errMessage ? <p>{errMessage}</p> : null}
    </form>
  );
};
