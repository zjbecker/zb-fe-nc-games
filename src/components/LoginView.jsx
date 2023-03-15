import { UserContext } from "../User";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { getUsers } from "./api";

export const LoginView = () => {
  const { user, setUser } = useContext(UserContext);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getUsers().then((users) => {
      setUsersData(users);
    });
  }, []);

  // refactor with profile picture and set user to the selected person- use a UserCard compt and make this work
  return (
    <ul>
      {usersData.map(({ username }) => {
        return (
          <li key={username}>
            <p>{username}</p>
          </li>
        );
      })}
    </ul>
  );
};
