import './App.css';
import Header from './Components/Header/Header.js';
import Menu from './Components/Menu/Menu.js';
import Button from './button/Button_test_css'
function App() {

  return (
    <div className="drinksApp">
      <Header></Header>
      <Menu></Menu>
      <Button texto="Clique aqui!" largura="100px"></Button>
    </div>
  );
}

export default App;
