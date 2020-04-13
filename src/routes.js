import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Page404 from "./Pages/Page404";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}
