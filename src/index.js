import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import store from "./store/state";
const root = ReactDOM.createRoot(document.getElementById('root'));

const RendMainPage = () =>{
    root.render(
        <React.StrictMode>
            <App store={store} />
        </React.StrictMode>
    );
}

store.PaindMainPage(RendMainPage)
RendMainPage()

reportWebVitals();
