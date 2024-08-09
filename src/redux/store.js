import {combineReducers, createStore} from "redux";
import buttensReducer from "./saidbar_reducer";
import dialogsReducer from "./dialogs_reducer";

let reducers = combineReducers({
        sidebar: buttensReducer,
        dialogpage: dialogsReducer
});

let store = createStore(reducers);

export default store;