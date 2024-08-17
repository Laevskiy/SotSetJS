import {setMyProfileAC} from "../../redux/myprofile_reducer";
import {connect} from "react-redux";
import Headr from "./headr";

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
const HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(Headr)

export default HeaderContainer