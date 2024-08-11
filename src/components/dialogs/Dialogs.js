import "./Dialogs.css"
const Dialogs = (props) =>{

    let dialogs = props.dialogItems.map( (item) =>{
        let id = item.id
        return(<div className={'dialogItem'}>
            <h3>{item.text}</h3>
            <button onClick={()=>props.addLike(id)}> Лайк {item.like} </button>
        </div>)
    })


    return(
     <div>
         <h1> Тут будут диалоги наши </h1>
         {dialogs}
     </div>

    )
}

export default Dialogs