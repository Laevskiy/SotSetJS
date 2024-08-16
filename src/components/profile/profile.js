const Profile = (props) =>{

    return(
        <div>
            <h1> Тут будут выбранный профиль </h1>
            <h1>{props.user.fullName}</h1>
            <h3>{props.user.aboutMe}</h3>
        </div>

    )
}

export default Profile