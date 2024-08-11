const FR_FOLLOW = "FR_FOLLOW"
const FR_UNFOLLOW = "FR_UNFOLLOW"
let initialState = {
    frainds:[ {id:1, name: "Алексей", follow:true},
        {id:2, name: "Марго", follow:false},
        {id:3, name: "Миша", follow:false},
        {id:4, name: "Юрий", follow:true}]
}

const fraindsReducer = (state = initialState, action) => {

    const changTR = (state,id) =>{
        let newstate = {...state}
        newstate.frainds = [...state.frainds]
        newstate.frainds.map((item) =>{
            if (item.id == id){
                item.follow = !item.follow
                return item
            }else{
                return item
            }

        })
        return newstate
    }
    switch(action.type){

        case FR_FOLLOW:
            let newstate = {...state}
            newstate.frainds = [...state.frainds]
            newstate.frainds.map((item) =>{
                if (item.id == action.id){
                    item.follow = true
                    return item
                }else{
                    return item
                }

            })
            console.log("Теперь вы друзья с "+action.id)
            console.log(newstate)
            return newstate
        case FR_UNFOLLOW:
            console.log("Вы больше НЕ друзья с "+action.id)
            return changTR(state,action.id)
        default:
            return state
    }
}

export const followFraindsAC = (id) =>{
    return {type:FR_FOLLOW, id:id}
}

export const unfollowFraindsAC = (id) =>{
    return {type:FR_UNFOLLOW, id:id}
}


export default fraindsReducer