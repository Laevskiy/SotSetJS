
import Frainds from "./frainds";
import {connect} from "react-redux";
import {
    changeCurrentPageAC,
    changeLoadingAC,
    followFraindsAC,
    getFraindsAC,
    unfollowFraindsAC
} from "../../redux/frainds_reducer";
import FraindsClass from "./fraindsClass";



let mapStateToProps = (state) =>{
    return{
        frainds:state.fraindsPage.frainds,
        currentPage:state.fraindsPage.currentPage,
        maxPage: state.fraindsPage.maxPage,
        loading:state.fraindsPage.loading,
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
        }


    }
}
const FraindsContainer = connect(mapStateToProps,mapDispatchToProps)(FraindsClass)


export default FraindsContainer