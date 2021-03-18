import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <Link to="/signup">Sign up</Link>
      </div>
      <div>
        <Link to="/login">Log in</Link>
      </div>
      <Switch>
        {/* more pages to be added here later */}
        <Route path="/post/:id" component={PostPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
