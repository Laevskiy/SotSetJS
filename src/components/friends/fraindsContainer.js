
import Frainds from "./frainds";
import {connect} from "react-redux";
import {followFraindsAC, unfollowFraindsAC} from "../../redux/frainds_reducer";



let mapStateToProps = (state) =>{
    return{
        frainds:state.fraindsPage.frainds
    }
};

let mapDispatchToProps = (dispatch) =>{
    return{
        follow: (id)=>{
            dispatch(followFraindsAC(id))
        },
        unfollow: (id) =>{
            dispatch(unfollowFraindsAC(id))
        }

    }
}
const FraindsContainer = connect(mapStateToProps,mapDispatchToProps)(Frainds)


export default FraindsContainer