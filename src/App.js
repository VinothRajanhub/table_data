import React from "react";

import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import AddData from "./containers/AddData/AddData";
import ViewData from "./containers/ViewData/ViewData";

import "./_app.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/adddata" component={AddData} />
          <Route exact path="/">
            <Redirect from="/" to="/adddata" />
          </Route>
          <Route path="/viewdata" component={ViewData} />
        </Switch>
      </Router>
    );
  }
}

export default App;
