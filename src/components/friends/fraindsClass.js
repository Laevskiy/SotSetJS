import {Component} from "react";
import axios from "axios";
import Loading from "../loading/loading";


class FraindsClass extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${4}`).
        then(res => {
            this.props.changeLoading()
             this.props.getFrainds(res.data.items)
        })
    }

   onChangePage = (page)=>{
       this.props.changeCurrentPage(page)
       this.props.changeLoading()
       axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${4}`).then(res => {
           this.props.changeLoading()
           this.props.getFrainds(res.data.items)
       })

   }

    render(){

           let pages = []

           for (let p = 1;p <= this.props.maxPage; p++) {
               pages.push(p)
           }

            return(<div>
                {this.props.loading ? <Loading/> : null}
                <div>
                    {pages.map(item => {
                        return <span  className={item === this.props.currentPage && "action"}
                        onClick={()=>this.onChangePage(item)}>{item}</span>
                    })}
                </div>
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