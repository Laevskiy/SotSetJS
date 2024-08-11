import './App.css';
import NavBar from "../navBar/NavBar";
import {Routes, Route, Outlet, Link, BrowserRouter, NavLink} from "react-router-dom";

import News from "../news/News";
import store from "../../store/state";

import DialogsContainer from "../dialogs/DialogsContainer";
import Friends from "../friends/frainds";
import FraindsContainer from "../friends/fraindsContainer";

const buttens = [
    {id:1, name: "Диалоги", url:'dialogs'},
    {id:2, name: "Новости", url:'news'},
]

function App(props) {

  return (
      <BrowserRouter>
      <div className="App">

          <div className="Head">Шапка</div>
          <div className="NavBar"><NavBar state = {props.store.getState().sidebar} /></div>
          <div className="osn">
              <Routes>
                  {<Route path ='dialogs' element={<DialogsContainer state ={props.store} />}/>}
                  {<Route path ='friends' element={<FraindsContainer/>}/>}
                  {/*<Route path ='news' element={<News news = {props.store.getNew()} redoinfText = {props.store.redoingText} addNews={props.store.addNewNews} />}/>*/}
                  {/*<Route path ='friends' element={<Friends store = {props.store} />}/>*/}
                  {/*<Route path ='friendslist' element={<FriendsListContainer store = {props.store} />}/>*/}
                  {<Route path ='/' element={<div>Главная страница</div>}/>}
               </Routes>
          </div>
          <div className="podval">Подвал</div>

      </div>
      </BrowserRouter>
  );
}

export default App;
