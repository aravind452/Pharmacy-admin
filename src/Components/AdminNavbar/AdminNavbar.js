import { Link } from "react-router-dom";
import "./AdminNavbar.css";

const AdminNavbar = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/add">Add Medicine</Link>
          </li>
          <li>
            <Link to="/dashboard/update">Update Medicine</Link>
          </li>
          <li>
            <Link to="/dashboard/delete">Delete Medicine</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AdminNavbar;
