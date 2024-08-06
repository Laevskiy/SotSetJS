let store = {
    postText : '11111',
    _buttens:[
        {id:1, name: "Диалоги", url:'dialogs'},
        {id:2, name: "Новости", url:'news'},
        {id:3, name: "Друзья", url:'friends'},
    ],
    _news:[{id:1, text: "Первая новость о котиках", category:'animal'},
           {id:2, text: "Новасть об авто", category:'auto'},
    ],

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

    addNewNews(){
        let body = { id:store.getNew().length, text:store.postText,category:"none"}
        store.getNew().push(body)
        store.mainFun()
    }

    }



export default store