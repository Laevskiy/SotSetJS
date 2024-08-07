import './App.css';
import NavBar from "../navBar/NavBar";
import {Routes, Route, Outlet, Link, BrowserRouter, NavLink} from "react-router-dom";
import Dialogs from "../dialogs/Dialogs";
import News from "../news/News";
import store from "../../store/state";
import Friends from "../friends/friends";
import FriendsContainer from "../fraindsList/fraindsListContainer";
import FriendsListContainer from "../fraindsList/fraindsListContainer";

const buttens = [
    {id:1, name: "Диалоги", url:'dialogs'},
    {id:2, name: "Новости", url:'news'},
]

function App(props) {
  return (
      <BrowserRouter>
      <div className="App">

          <div className="Head">Шапка</div>
          <div className="NavBar"><NavBar buttens ={props.store.getButten()}/></div>
          <div className="osn">
              <Routes>
                  <Route path ='dialogs' element={<Dialogs />}/>
                  <Route path ='news' element={<News news = {props.store.getNew()} redoinfText = {props.store.redoingText} addNews={props.store.addNewNews} />}/>
                  <Route path ='friends' element={<Friends store = {props.store} />}/>
                  <Route path ='friendslist' element={<FriendsListContainer store = {props.store} />}/>
               </Routes>
          </div>
          <div className="podval">Подвал</div>

      </div>
      </BrowserRouter>
  );
}

export default App;
