import "./NavBar.css"
import {NavLink} from "react-router-dom";

const NavBar = (props) =>{

    let butns = props.buttens.map((butten) => {
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
            {butns}
        </div>
    )
}

export default NavBar