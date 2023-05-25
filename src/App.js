import './App.css';
import Navbar from "./componets/NavBar/NavBar";
import ItemListConteiner from './componets/ItemListConteiner/ItemListConteiner';
import ItemCount from './componets/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <ItemListConteiner gretting={"Bienvenidos Huerteros"}/>
       <ItemCount initial={1} stock={20} onAdd={(quantity) => console.log("Cantidad Agregada",quantity)}/>
    </div>
  );
}

export default App;
