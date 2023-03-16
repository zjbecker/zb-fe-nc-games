import { useContext } from "react";
import { UserContext } from "../User";

export const UserCard = ({ avatar_url, name, username }) => {
  const { setUser } = useContext(UserContext);

  return (
    <li
      className="login-list-item"
      onClick={() => {
        setUser({ avatar_url, name, username });
      }}
    >
      <h2>{name}</h2>
      <h3>Display: {username}</h3>
      <img src={avatar_url} alt={username}></img>
    </li>
  );
};
