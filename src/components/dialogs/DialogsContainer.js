import Dialogs from "./Dialogs";
import {likeDialogsAC} from "../../redux/dialogs_reducer";
import {connect} from "react-redux";

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
        dialogItems:state.dialogsPage.dialogs
    }
};

let mapDispatchToProps = (dispatch) =>{
    return{
        addLike: (id)=>{
            dispatch(likeDialogsAC(id))
        }

    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer