const ADD_MESSAGE = "ADD_MESSAGE"

export const AddMessageActionCreator=()=>{
    return {type:ADD_MESSAGE}
}

const messageReducer = (state,action)=>{

    if(action.type === ADD_MESSAGE){
        console.log ("Добавляем сообщение")
        console.log(state)
    }
    return state
}

export default messageReducer