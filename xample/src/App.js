import logo from './logo.svg';
import NavBar from './Components/NavBar/navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos a la Casa los Muebles'}/>
    
    </div>
  );
}

export default App;
