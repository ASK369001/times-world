import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "./views/HomePage";
import { store } from "./store";
import LoginForm from "./views/LoginForm";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const isAuthenticated = false;
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
