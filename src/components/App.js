import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contacts from "../pages/Contacts";
import Gallery from "../pages/Gallery";
import DefaultPage from "../pages/DefaultPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/gallery" component={Gallery} />
        <Route component={DefaultPage} />
      </Switch>
    </div>
  );
}

export default App;
