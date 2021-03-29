import "./App.css";
import Header from "./Components/Header/Header.js";
import style from "./Components/Header/header.module.css";
import Rodape from "./Components/Rodape/Rodape";
import Home from "./Pages/Home/Home";
import Contato from "./Pages/Contato/Contato";

import Sobre from "./Pages/Sobre/Sobre";
import Drinks from "./Pages/Drinks/Drinks";
import Time from "./Pages/Time/Time";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div className="drinksApp">
        <Header />

        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>

          <Route path="/contato">
            <Contato />
          </Route>

          <Route path="/sobre">
            <Sobre />
          </Route>

          <Route path="/drinks">
            <Drinks />
          </Route>

          <Route path="/time">
            <Time />
          </Route>

        </Switch>
        <Rodape/>
      </div>
    </Router>
  );
}

/*var porta = process.env.PORT || 8080;
app.listen(porta);*/