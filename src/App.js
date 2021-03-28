import "./App.css";
import Header from "./Components/Header/Header.js";
import style from "./Components/Header/header.module.css";
import Rodape from "./Components/Rodape/Rodape";
import Home from "./Pages/Home/Home";
import Contato from "./Pages/Contato/Contato";

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
              <li>
                <a className={style.nav}>
                  <h2>Drinks</h2>
                </a>
              </li>

              <li className={style.nav}>
                <Link to="/contato">Contato</Link>
              </li>
              <li>
                <a className={style.nav}>
                  <h2>Nosso Time</h2>
                </a>
              </li>
              <li>
                <a className={style.nav}>
                  <h2>Sobre Nós</h2>
                </a>
              </li>
            </ul>
          </nav>
        </Header>

        {/* <li><Link to="/">Drinks</Link></li> */}

        {/* <li> <Link to="/">Nosso time</Link></li> */}

        {/* <li><Link to="/">Sobre Nós</Link></li> */}

        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>

          <Route path="/contato">
            <Contato />
          </Route>
        </Switch>
        <Rodape></Rodape>
      </div>
    </Router>
  );
}
