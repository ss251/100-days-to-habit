import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NamePicker from "./NamePicker";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={NamePicker} />
      <Route path="/:nameId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
