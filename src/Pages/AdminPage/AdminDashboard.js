import AdminNavbar from "../../Components/AdminNavbar/AdminNavbar";
import "./AdminDashboard.css";
const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-section">
      <AdminNavbar />
      <h1>
        Welcome to Pharmacy Management System<br></br>Admin Panel
      </h1>
    </div>
  );
};
export default AdminDashboard;
