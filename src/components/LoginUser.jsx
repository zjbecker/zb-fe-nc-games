import { UserCard } from "./UserCard";
import { useParams } from "react-router-dom";

export const LoginUser = () => {
  const { username } = useParams();
  return <UserCard {...username} />;
};
