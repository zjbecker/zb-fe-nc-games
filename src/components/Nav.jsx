import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="MyNav">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/reviews" className="nav-link">
        Reviews
      </Link>
    </nav>
  );
};
