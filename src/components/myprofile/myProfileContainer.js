import {connect} from "react-redux";
import {likeDialogsAC} from "../../redux/dialogs_reducer";
import MyProfile from "./myProfile";
import {Component} from "react";
import axios from "axios";
import {setMyProfileAC} from "../../redux/myprofile_reducer";
import {Navigate} from "react-router-dom";


class myProfileClass extends Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        })
            .then(res => {

                this.props.setMyProfile(res.data.data)
            })

    }

    render(props){
        return <MyProfile{...this.props} />
    }

}

let mapStateToProps = (state) =>{
    return{
      myProfile: state.myprofile,

    }
};

let mapDispatchToProps = (dispatch) => {
    return {

        setMyProfile: (data) => {
            dispatch(setMyProfileAC(data))
        }
    };

}
const MyProfileContainer = connect(mapStateToProps,mapDispatchToProps)(myProfileClass)

export default MyProfileContainer