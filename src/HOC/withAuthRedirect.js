import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import Login from "../components/loging/Login";
import React from "react";

let mapStateToProps = (state) =>{
    return{
        status:state.myprofile.authorizations
    }
};

const AuthRedirect = (Component) =>{

    const fun1 = (props) =>{
        if(!props.status){
            return <Navigate to="/login"/>
        }else{
            return <Component {...props}/>
        }
    }

    return connect(mapStateToProps)(fun1)


}


export default AuthRedirect
