import "./AdminLoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserAuth } from "../../ContextAPI/UserAuthContext";

const AdminLoginPage = () => {
  const { setUser } = useUserAuth();

  let navigate = useNavigate();
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setUserCredentials((preValues) => {
      return {
        ...preValues,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (userCredentials.email === "admin@gmail.com") {
      if (userCredentials.password === "aravind") {
        setUser(userCredentials);
        navigate("/dashboard");
      } else {
        setError("Invalid Password");
      }
    } else {
      setError("Incorrect Credentials");
    }
  }
  return (
    <div className="login-page-section">
      <header className="header">
        <nav>
          <ul>
            <li>
              <Link to="/admin">Pharmacy Management System Admin</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="login-page-container">
        <form>
          <label className="title-login">Admin Account</label>

          <div className="credentials-section">
            <label>Email Address</label>
            <input
              placeholder="Enter your Email Address"
              type="email"
              name="email"
              onChange={handleChange}
            />
          </div>

          <div className="credentials-section">
            <label>Password</label>
            <input
              placeholder="Enter your Password"
              type="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <p>{error && error}</p>

          <button className="login-button" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
