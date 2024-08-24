import Dialogs from "./Dialogs";
import {likeDialogsAC} from "../../redux/dialogs_reducer";
import {connect} from "react-redux";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import AuthRedirect from "../../HOC/withAuthRedirect";


// const DialogsContainer = (props) =>{
//
//     let dialogItems = props.state.getState().dialogsPage.dialogs
//
//     const addLike = (id) =>{
//         props.state.dispatch(likeDialogsAC(id))
//     }
//
//     return(
//         <div>
//             <Dialogs dialogItems ={dialogItems} addLike = {addLike} />
//         </div>
//
//     )
// };

let mapStateToProps = (state) =>{
    return{
        dialogItems:state.dialogsPage.dialogs,
        status:state.myprofile.authorizations
    }
};

let mapDispatchToProps = (dispatch) =>{
    return{
        addLike: (id)=>{
            dispatch(likeDialogsAC(id))
        }

    }
}



const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirect(Dialogs))

export default DialogsContainer