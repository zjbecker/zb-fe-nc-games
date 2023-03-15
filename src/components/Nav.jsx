import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="my-nav">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/reviews" className="nav-link">
        Reviews
      </Link>
      <Link to="/login" className="nav-link">
        Log in
      </Link>
    </nav>
  );
};
