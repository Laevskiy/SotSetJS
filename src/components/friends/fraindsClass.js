import {Component} from "react";
import axios from "axios";


class FraindsClass extends Component {



    getAPI = ()=>{

       axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
            this.props.getFrainds(res.data.items)
        })


}



    render(){
            return(<div>
                <button onClick={this.getAPI}>Взять данные </button>


                {this.props.frainds.map((fraind)=>{
                    return <div className={"fraind"}>

                        <h3>{fraind.name}</h3>
                        <div>
                            {fraind.followed ? <button onClick={() => this.props.unfollow(fraind.id)}>unFollow</button> :
                                <button onClick={() => this.props.follow(fraind.id)}>Follow</button>}
                        </div>
                    </div>
                })}
            </div>)


    }
}


export default FraindsClass;