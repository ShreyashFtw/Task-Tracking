import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";
import UserManagement from "./Components/UserManagement";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/tasks" exact component={TaskList} />
        <Route path="/tasks/new" exact component={TaskForm} />
        <Route path="/users" exact component={UserManagement} />
      </Switch>
    </Router>
  );
}

export default App;
