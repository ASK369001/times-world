import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import { useSelector } from "react-redux";
import {} from "./reducers/authSlice";
import LoginForm from "./views/LoginForm";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <HomePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
