import './App.css';
import NavBar from "../navBar/NavBar";
import {Routes, Route, Outlet, Link, BrowserRouter, NavLink} from "react-router-dom";



import DialogsContainer from "../dialogs/DialogsContainer";
import FraindsContainer from "../friends/fraindsContainer";
import ProfileContainer from "../profile/profileContainer";


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
                  {<Route path ='profile/:userID' element={<ProfileContainer/>}/>}
                  {<Route path ='/' element={<div>Главная страница</div>}/>}
               </Routes>
          </div>
          <div className="podval">Подвал</div>

      </div>
      </BrowserRouter>
  );
}

export default App;
