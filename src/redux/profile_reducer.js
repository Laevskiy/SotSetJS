
const SET_PROFILE = "SET_PROFILE";

let initialState = {

}

const profileReducer = (state=initialState,action) =>{
    switch (action.type){
        case SET_PROFILE:
            let newstate = {...action.userid}
            return newstate

        default:
            return state
    }
};


export const setProfileAC = (userid) =>{
    return {type:SET_PROFILE, userid:userid}
}

export default profileReducer