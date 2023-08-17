import "./App.css";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import Header from "./components/common/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Post from "./components/Post/Post";
import Profile from "./components/Profile/Profile";
import Purchase from "./components/Purchase/Purchase";
import Cart from "./components/cart/Cart";
import Home from "./components/Home/Home";
import { ProtectedRoute } from "protected-route-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "./components/redux/action/user";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(userProfile());
      console.log("hello login success");
      console.log(isAuthenticated);
    }
  }, [dispatch,isAuthenticated]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirect="/profile"
              >
                <Login />
              </ProtectedRoute>
            }
          />

          <Route
            path="/home"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/login"
            element={
              <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirect="/profile"
              >
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirect="/profile"
              >
                <Register />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dash"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/post"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Post />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/purchase"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                redirect="/profile"
              >
                <Purchase />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirect="/profile"
              >
                <Cart />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
