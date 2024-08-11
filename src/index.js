import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
//import store from "./store/state";
import store from './redux/store';
import {Provider} from "react-redux";
const root = ReactDOM.createRoot(document.getElementById('root'));

const RendMainPage = () =>{
    root.render(

        <React.StrictMode>
            <Provider store={store}>
                <App store={store}/>
            </Provider>

        </React.StrictMode>
    );
}
RendMainPage();
//store.PaindMainPage(RendMainPage)
// store.subscribe(()=>{
//     RendMainPage()
// })


reportWebVitals();
