//import logo from './logo.svg';
import './App.css';
import NavBarComponent from './components/NavBarComponent';
import ItemListConteiner from './components/ItemListConteiner';

function App() {
  return (
    <div>
      <NavBarComponent/>
      <ItemListConteiner greeting={'Bienvenidos'}/>
    </div>
  )}
    

export default App;
