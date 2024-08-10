const GET_DIALOGS = 'GET_DIALOGS'
const ADD_LIKE = 'ADD_LIKE'


let initialState = {
    dialogs:[ {id:1, text: "Текст 1", like:0},
        {id:2, text: "Текст 2",like:0},
        {id:3, text: "Текст 3",like:0},
        {id:4, text: "Текст 4",like:0}]
}

const dialogsReducer = (state=initialState,action) =>{
    switch (action.type){
        case GET_DIALOGS:
            return state
        case ADD_LIKE:
            let newstate = state.dialogs.map((item) =>{
                if (item.id == action.id){
                    return {...item, like: item.like +1 }
                }else{
                    return item
                }

            })
            console.log(newstate)
            console.log(action.id)

            return state
        default:
            return state
    }
};

export const dialogsActionCreator = ()=>{
    return {type:GET_DIALOGS}
}

export const likeDialogsAC = (id) =>{
    return {type:ADD_LIKE, id:id}
}

export default dialogsReducer