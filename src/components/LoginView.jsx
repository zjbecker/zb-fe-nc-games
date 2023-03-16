import { UserContext } from "../User";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { getUsers } from "./api";
import { UserCard } from "./UserCard";

export const LoginView = () => {
  const { user, setUser } = useContext(UserContext);
  const [usersData, setUsersData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getUsers().then((users) => {
      setUsersData(users);
    });
  }, []);

  if (user) {
    const firstName = user.name.split(" ")[0];
    return <h2>{`Hi ${firstName}, you're logged in!`}</h2>;
  }

  return (
    <ul className="login-list">
      {usersData.map((user) => {
        return (
          <a
            className="user-login-item"
            key={user.name}
            onClick={() => {
              setUser(user);
              setIsLoggedIn(true);
            }}
          >
            <UserCard {...user} />
          </a>
        );
      })}
    </ul>
  );
};
