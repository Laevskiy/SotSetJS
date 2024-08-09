const GET_DIALOGS = 'GET_DIALOGS'


let initialState = {
    dialogs:[ {id:1, text: "Текст 1"},
        {id:2, text: "Текст 2"},
        {id:3, text: "Текст 3"},
        {id:4, text: "Текст 4"}]
}

const dialogsReducer = (state=initialState,action) =>{
    switch (action.type){
        case GET_DIALOGS:
            return state
        default:
            return state
    }
};

export const dialogsActionCreator = ()=>{
    return {type:GET_DIALOGS}
}

export default dialogsReducer