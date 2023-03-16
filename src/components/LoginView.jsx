import { UserContext } from "../User";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { getUsers } from "./api";
import { UserCard } from "./UserCard";
import { LoadingAnimation } from "./LoadingAnimation";

export const LoginView = () => {
  const { user } = useContext(UserContext);
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getUsers().then((users) => {
      setUsersData(users);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <LoadingAnimation />;

  if (user) {
    const firstName = user.name.split(" ")[0];
    return <h2>{`Hi ${firstName}, you're logged in!`}</h2>;
  }

  return (
    <ul className="login-list">
      {usersData.map((user) => {
        return <UserCard key={user.username} {...user} />;
      })}
    </ul>
  );
};
