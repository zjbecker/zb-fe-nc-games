export const UserCard = ({ avatar_url, name, username }) => {
  return (
    <li className="login-list-item">
      <h2>{name}</h2>
      <h3>Display: {username}</h3>
      <img src={avatar_url} alt={username}></img>
    </li>
  );
};
