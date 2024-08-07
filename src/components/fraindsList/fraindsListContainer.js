import FraindsList from "./fraindsList";
import {addFraindsListActionCreator} from "../../store/fraindList-reducer";
import {AddNewsActionCreator} from "../../store/post_reducer";

const FriendsListContainer = (props) =>{

    const list = props.store.getFrainds()


    let addFriends = (a) =>{
        props.store.dispatch(addFraindsListActionCreator(a))
    }

    return(
        <div>
            <FraindsList list={list} addFriends = {addFriends} />
        </div>

    )
}

export default FriendsListContainer