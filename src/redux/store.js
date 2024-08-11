import {combineReducers, createStore} from "redux";
import buttensReducer from "./saidbar_reducer";
import dialogsReducer from "./dialogs_reducer";
import fraindsReducer from "./frainds_reducer";

let reducers = combineReducers({
        sidebar: buttensReducer,
        dialogsPage: dialogsReducer,
        fraindsPage:fraindsReducer

});

let store = createStore(reducers);

export default store;