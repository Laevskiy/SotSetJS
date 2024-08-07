const ADD_FRAIND_LIST = "ADD_FRAIND_LIST"


export const addFraindsListActionCreator = (a) =>{
    return {type:ADD_FRAIND_LIST,body:a}
}


const fraindListReducer = (state,action)=>{

    if(action.type === ADD_FRAIND_LIST){
        console.log ("Добавляем нового друга")
        console.log(action.body)

    }
    return state
}

export default fraindListReducer




