import {applyMiddleware, combineReducers, createStore} from "redux";
import buttensReducer from "./saidbar_reducer";
import dialogsReducer from "./dialogs_reducer";
import fraindsReducer from "./frainds_reducer";
import profileReducer from "./profile_reducer";
import myprofileReducer from "./myprofile_reducer";
import {thunk} from 'redux-thunk'


let reducers = combineReducers({
        sidebar: buttensReducer,
        dialogsPage: dialogsReducer,
        fraindsPage:fraindsReducer,
        profilePage:profileReducer,
        myprofile:myprofileReducer,

});

let store = createStore(reducers,applyMiddleware(thunk));

export default store;