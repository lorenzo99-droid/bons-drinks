import './App.css';
import Header from './Components/Header/Header.js';
import Menu from './Components/Menu/Menu.js';
import Button from './button/Button_test_css';
import {
  BrouserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  return (
    <div className="drinksApp">
      <Header></Header>
      <Menu></Menu>
      <Button texto="Clique aqui!" largura="100px"></Button>
    </div>
  );
}

export default function App(){
  return(
    <Router>
      <div>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/sobre">Home</Link>
          </li>
          <li>
          <Link to="/contato">Home</Link>
          </li>
        </nav>
      </div>
    

      <Switch>
         <Route exact path="/">
            <home />
          </Route>
          <Route path="/contato">
            <contat />
          </Route>
          <Route path="/*">
            <contat />
          </Route>
      </Switch>
    </Router>
  )
};


