import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLoginPage from "./Pages/AdminLoginPage/AdminLoginPage";
import AdminDashboard from "./Pages/AdminPage/AdminDashboard";
import AddPage from "./Pages/AddPage/AddPage";
import DeletePage from "./Pages/DeletePage/DeletePage";
import UpdatePage from "./Pages/UpdatePage/UpdatePage";
import { UserAuthContextProvider } from "./ContextAPI/UserAuthContext";
import ProtectedRoute from "./ContextAPI/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<AdminLoginPage />} />
            <Route
              exact
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/dashboard/add"
              element={
                <ProtectedRoute>
                  <AddPage />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/dashboard/update"
              element={
                <ProtectedRoute>
                  <UpdatePage />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/dashboard/delete"
              element={
                <ProtectedRoute>
                  <DeletePage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
