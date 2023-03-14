export const CommentCard = ({ author, body, votes }) => {
  return (
    <li className="comment-card">
      <h3>{author} said:</h3>
      <p>{body}</p>
      <h4>votes: {votes}</h4>
    </li>
  );
};
