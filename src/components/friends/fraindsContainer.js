
import Frainds from "./frainds";
import {connect} from "react-redux";
import {
    changeCurrentPageAC,
    changeLoadingAC,
    followFraindsAC, followUnFollowAC,
    getFraindsAC, getUserThunk,
    unfollowFraindsAC
} from "../../redux/frainds_reducer";
import FraindsClass from "./fraindsClass";



let mapStateToProps = (state) =>{
    return{
        frainds:state.fraindsPage.frainds,
        currentPage:state.fraindsPage.currentPage,
        maxPage: state.fraindsPage.maxPage,
        loading:state.fraindsPage.loading,
        changeListUser:state.fraindsPage.changeListUser,
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
        },
        changeCurrentPage: (page) =>{
            dispatch(changeCurrentPageAC(page))
        },
        changeLoading: ()=>{
            dispatch(changeLoadingAC())
        },
        followUnFollow:(status,userid)=>{
            dispatch(followUnFollowAC(status,userid))
        },
        getUserThunk:(page)=>{
            dispatch(getUserThunk(page))},


    }
}
const FraindsContainer = connect(mapStateToProps,mapDispatchToProps)(FraindsClass)


export default FraindsContainer