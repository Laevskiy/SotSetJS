import {connect} from "react-redux";
import Login from "./Login";

let mapStateToProps = (state) =>{
    return{
        status:state.myprofile.authorizations

    }
};

let LoginContainer = connect(mapStateToProps)(Login)

export default LoginContainer;