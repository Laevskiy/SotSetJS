import {AddNewsActionCreator} from "../../store/post_reducer";
import {AddMessageActionCreator} from "../../store/message-reducer";
import {addFraindsListActionCreator} from "../../store/fraindList-reducer";


const Friends = (props) =>{

    let addMessage = () =>{
        props.store.dispatch(AddMessageActionCreator())
    }

    let addNews = () =>{
        props.store.dispatch(AddNewsActionCreator())
    }

    let addFriends = () =>{
        props.store.dispatch(addFraindsListActionCreator())
    }

    return(
        <div>
            <h1> Диалоги с друзьями </h1>
            <button onClick={addNews}> Добавление новости</button>
            <button onClick={addMessage}> Добавление сообщения</button>
            <button onClick={addFriends}> Добавление нового друга</button>
        </div>

    )
}

export default Friends