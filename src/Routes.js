import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages";
import { MeasurementsCard } from "./components/index";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/averages" component={MeasurementsCard} />
  </Switch>
);

export default Routes;
