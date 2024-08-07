const FriendsList = (props) =>{

    return(
        <div>
            <h1> Тут будет ваш список друзей </h1>

               <button onClick={()=>props.addFriends("Алексей")}>Добавление нового друга</button>

        </div>

    )
}

export default FriendsList

