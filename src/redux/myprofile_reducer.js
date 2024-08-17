const SET_MY_PROFILE = "SET_MY_PROFILE";

let initialState = {
    email:null,
    id:null,
    login:null,
    authorizations:false

}

const myprofileReducer = (state=initialState,action) =>{
    switch (action.type){
        case SET_MY_PROFILE:
            let newstate = {...state.email}
                newstate.email = action.data.email
                newstate.id = action.data.id
                newstate.login = action.data.login
                newstate.authorizations = true
            return newstate
        default:
            return state
    }
};


export const setMyProfileAC = (data) =>{
    return {type:SET_MY_PROFILE, data:data}
}

export default myprofileReducer