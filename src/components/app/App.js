import './App.css';
import NavBar from "../navBar/NavBar";

const buttens = [
    {id:1, name: "Диалоги"},
    {id:2, name: "Пользователи"},
]

function App() {
  return (
      <div className="App">

          <div className="Head">Шапка</div>
          <div className="NavBar"><NavBar buttens ={buttens}/></div>
          <div className="osn">Основной контент</div>
          <div className="podval">Подвал</div>

      </div>
  );
}

export default App;
