import './App.css';
import NavBar from "../navBar/NavBar";
import {Routes, Route, Outlet, Link, BrowserRouter, NavLink} from "react-router-dom";
import Dialogs from "../dialogs/Dialogs";
import News from "../news/News";

const buttens = [
    {id:1, name: "Диалоги", url:'dialogs'},
    {id:2, name: "Новости", url:'news'},
]

function App() {
  return (
      <BrowserRouter>
      <div className="App">

          <div className="Head">Шапка</div>
          <div className="NavBar"><NavBar buttens ={buttens}/></div>
          <div className="osn">
              <Routes>
                  <Route path ='dialogs' element={<Dialogs />}/>
                  <Route path ='news' element={<News />}/>
               </Routes>
          </div>
          <div className="podval">Подвал</div>

      </div>
      </BrowserRouter>
  );
}

export default App;
