const GET_BUTTENS = 'GET_BUTTENS'


let initialState = {
    buttens:[ {id:1, name: "Диалоги", url:'dialogs'},
            {id:2, name: "Новости", url:'news'},
            {id:3, name: "Друзья", url:'friends'},
            {id:4, name: "Список друзей", url:'friendslist'}]
    }

const buttensReducer = (state=initialState,action) =>{
      switch (action.type){
          case GET_BUTTENS:
              return state
          default:
              return state
      }
};

export const buttensActionCreator = ()=>{
    return {type:GET_BUTTENS}
}

export default buttensReducer