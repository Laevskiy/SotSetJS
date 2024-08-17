const Headr = (props) =>{

    let myProfile = props.myProfile
    return (<div>{myProfile.authorizations? <h2>{props.myProfile.login}</h2>:<h2>Регистрация</h2>}</div>)




}

export default Headr