const MyProfile = (props) =>{

    let myProfile = props.myProfile;
    return(
        <div>
            <h1>{myProfile.login}</h1>
            <h3>{myProfile.email}</h3>
            <h3>{myProfile.id}</h3>
        </div>

    )
}

export default MyProfile