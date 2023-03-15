import { Nav } from "./Nav";

import { UserContext } from "../User";
import { useContext } from "react";

export const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header>
      <h1>GAMES</h1>
      <h4>Logged in as: {user.username}</h4>
      <Nav />
    </header>
  );
};
