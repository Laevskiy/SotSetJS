const FR_FOLLOW = "FR_FOLLOW"
const FR_UNFOLLOW = "FR_UNFOLLOW"
const GET_FRIENDS = "GET_FRIENDS"
const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE"
const CHANGE_LOADING = "CHANGE_LOADING"


let initialState = {
    frainds:[ {id:1, name: "Алексей", followed:true},
        {id:2, name: "Марго", followed:false},
        {id:3, name: "Миша", followed:false},
        {id:4, name: "Юрий", followed:true}],
    currentPage:1,
    maxPage: 8,
    loading:false

}

const fraindsReducer = (state = initialState, action) => {

    const changTR = (state,id) =>{
        let newstate = {...state}
        newstate.frainds = [...state.frainds]
        newstate.frainds.map((item) =>{
            if (item.id == id){
                item.followed = !item.followed
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
                    item.followed = true
                    return item
                }else{
                    return item
                }

            })
            console.log("Теперь вы друзья с "+action.id)

            return newstate

        case FR_UNFOLLOW:
            return changTR(state,action.id)

        case GET_FRIENDS:

            let stateNew = {...state}
                stateNew.frainds = [...action.frainds]
            return stateNew

        case CHANGE_CURRENT_PAGE:
            let pgState = {...state,currentPage: action.page}
            return pgState

        case CHANGE_LOADING:
           let loadstate = {...state,loading:!state.loading}

           return loadstate

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

export const getFraindsAC = (frainds) =>{
    return {type:GET_FRIENDS, frainds:frainds}
}

export const changeCurrentPageAC = (page) =>{
    return {type:CHANGE_CURRENT_PAGE, page:page}
}

export const changeLoadingAC = () =>{
    return {type:CHANGE_LOADING}
}


export default fraindsReducer