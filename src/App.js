import React from "react";
import Header from "./Components/Header";
import "./App.css";
import Homee from "./Components/Homee";
import Login from "./Components/Login";
import Detail from "./Components/Detail";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Homee} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
