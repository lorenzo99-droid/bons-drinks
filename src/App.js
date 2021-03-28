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
        <Header className={style.navContainer}>
          <nav className={style.navHeader}>
            <ul>
              <li className={style.nav}>
                <Link to="/"> Bons Drinks</Link>
              </li>
              <li className={style.nav}>
                  <h2>Drinks</h2>
                
              </li>

              <li className={style.nav}>
                <Link to="/contato">Contato</Link>
              </li>

              <li className={style.nav}>
                  <Link to="/time">Nosso Time</Link>
              </li>
              <li className={style.nav}>
                  <Link to="/sobre">Sobre Nós</Link>
              </li>
            </ul>
          </nav>
        </Header>

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
        <Rodape></Rodape>
      </div>
    </Router>
  );
}
