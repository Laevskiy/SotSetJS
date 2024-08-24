import "./Dialogs.css"
import {Navigate} from "react-router-dom";
const Dialogs = (props) =>{

    let dialogs = props.dialogItems.map( (item) =>{
        let id = item.id
        return(<div className={'dialogItem'}>
            <h3>{item.text}</h3>
            <button onClick={()=>props.addLike(id)}> Лайк {item.like} </button>
        </div>)
    })

    // if (!props.status){
    //     return <Navigate to={'/login'}/>
    // }
    return(
     <div>
         <h1> Тут будут диалоги наши </h1>
         {dialogs}
     </div>

    )
}

export default Dialogs