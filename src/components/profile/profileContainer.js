import {connect} from "react-redux";
import Profile from "./profile";
import {Component} from "react";
import axios from "axios";

import {
    changeCurrentPageAC,
    changeLoadingAC,
    followFraindsAC,
    getFraindsAC,
    unfollowFraindsAC
} from "../../redux/frainds_reducer";
import {setProfileAC} from "../../redux/profile_reducer";
import {withRouter} from "../../withRouter";

class ProfileClass extends Component {

    componentDidMount() {
        let userId = this.props.router.params.userID
        console.log(userId)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then(res => {

            this.props.setProfile(res.data)
        })

    }

    render(props){
        return <Profile {...this.props} />
    }

}


let mapStateToProps = (state) =>{
    return{
        user: state.profilePage
    }
};

let mapDispatchToProps = (dispatch) =>{
    return{
        setProfile: (useid) =>{
            dispatch(setProfileAC(useid))
        }
    }
};


let a = withRouter(ProfileClass)

const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(a)


export default ProfileContainer