import {combineReducers, createStore} from "redux";
import buttensReducer from "./saidbar_reducer";
import dialogsReducer from "./dialogs_reducer";
import fraindsReducer from "./frainds_reducer";
import profileReducer from "./profile_reducer";
import myprofileReducer from "./myprofile_reducer";

let reducers = combineReducers({
        sidebar: buttensReducer,
        dialogsPage: dialogsReducer,
        fraindsPage:fraindsReducer,
        profilePage:profileReducer,
        myprofile:myprofileReducer,

});

let store = createStore(reducers);

export default store;