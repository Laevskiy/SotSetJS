import "./NavBar.css"
import {NavLink} from "react-router-dom";

const NavBar = (props) =>{
     console.log(props.state.buttens)
let butns = props.state.buttens.map((butten) => {
    return (
        <div className={'butall'}>
            <NavLink to={butten.url}
                 className={"butns"}
                 style={({isActive}) => ({color: isActive ? "white":"black" }) }
                 >{butten.name}
            </NavLink>
        </div>
    )
})

return(
    <div className="NavBar">
        <div>Тут будут кнопки</div>
        {butns}
    </div>
)


}

export default NavBar