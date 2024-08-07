const ADD_NEWS = "ADD_NEWS"

export const AddNewsActionCreator=()=>{
    return {type:ADD_NEWS}
}

const newsReducer = (state,action)=>{

    if(action.type === ADD_NEWS){
        console.log ("Добавляем новости")
        console.log(state)
    }
    return state
}

export default newsReducer