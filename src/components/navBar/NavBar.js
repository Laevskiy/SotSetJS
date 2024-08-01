import "./NavBar.css"

const NavBar = (props) =>{

    let butns = props.buttens.map((butten) => {
        return (
            <div>
                <h2>{butten.name}</h2>
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