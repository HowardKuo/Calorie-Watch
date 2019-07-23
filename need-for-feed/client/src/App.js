import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Calories from "./pages/Calories";
import Search from "./pages/Search";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Calories} />
          <Route exact path="/calories" component={Calories} />
          <Route exact path="/search/" component={Search} />
           />
        </Switch>
      </div>
    </Router>
  );
}

export default App;