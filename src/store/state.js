import messageReducer from "./message-reducer";
import newsReducer from "./post_reducer";
import fraindListReducer from "./fraindList-reducer";



let store = {
    postText : '11111',
    _buttens:[
        {id:1, name: "Диалоги", url:'dialogs'},
        {id:2, name: "Новости", url:'news'},
        {id:3, name: "Друзья", url:'friends'},
        {id:4, name: "Список друзей", url:'friendslist'},
    ],
    _news:[{id:1, text: "Первая новость о котиках", category:'animal'},
           {id:2, text: "Новасть об авто", category:'auto'},
    ],

    _frainds: [{id:1, name:"Алексей", surname:"Лаевский", b_year:1991}],

    getFrainds(){
        return this._frainds
    },

    getButten(){
        return this._buttens
    },

    getNew(){
        return this._news
    },


    mainFun(){
      return 5
    },

    PaindMainPage(a){
       this.mainFun = a
    },

    redoingText(a){
        store.postText = a
        store.mainFun()
    },

    // addNewNews(){
    //     let body = { id:store.getNew().length+1, text:store.postText,category:"none"}
    //     console.log(store.getNew())
    //     store.getNew().push(body)
    //     store.mainFun()
    // },

    dispatch (action){
        messageReducer(store.getButten(),action)
        newsReducer(store.getNew(),action)
        fraindListReducer(store.getFrainds(),action)

        store.mainFun()
    }

    }



export default store