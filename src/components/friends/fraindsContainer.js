
import Frainds from "./frainds";
import {connect} from "react-redux";
import {followFraindsAC, getFraindsAC, unfollowFraindsAC} from "../../redux/frainds_reducer";
import FraindsClass from "./fraindsClass";



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
        },
        getFrainds:(frainds) =>{
            dispatch(getFraindsAC(frainds))
        }


    }
}
const FraindsContainer = connect(mapStateToProps,mapDispatchToProps)(FraindsClass)


export default FraindsContainer