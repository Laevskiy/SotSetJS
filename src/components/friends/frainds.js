import './frainds.css'
const Frainds = (props) =>{

    let frainds = props.frainds.map((fraind)=>{
        return (
            <div className={"frainds"}>

                <h3>{fraind.name}</h3>
                <div>
                    {fraind.followed ? <button onClick={()=>props.unfollow(fraind.id)}>unFollow</button> : <button onClick={()=>props.follow(fraind.id)}>Follow</button>}
                </div>
            </div>

        )
    })

    return(
        <div>
            {frainds}
        </div>

    )
}

export default Frainds