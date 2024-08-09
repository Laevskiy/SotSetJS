import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
//import store from "./store/state";
import store from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));

const RendMainPage = () =>{
    root.render(
        <React.StrictMode>
            <App store={store} />
        </React.StrictMode>
    );
}

//store.PaindMainPage(RendMainPage)
store.subscribe(RendMainPage)
RendMainPage()

reportWebVitals();
