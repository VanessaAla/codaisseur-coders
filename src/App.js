import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        {/* more pages to be added here later */}
        <Route path="/post/:id" component={PostPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
