import {Component} from "react";
import axios from "axios";
import Loading from "../loading/loading";
import {NavLink} from "react-router-dom";
import './frainds.css'
import {getUsers} from "../../api/api";


class FraindsClass extends Component {

    componentDidMount() {
        this.props.changeLoading()
        console.log(this.props.changeListUser)
        //axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${4}`,
            //{withCredentials: true}).
        getUsers(this.props.currentPage).
        then(res => {
            this.props.changeLoading()
             this.props.getFrainds(res.data.items)
        })
    }

   onChangePage = (page)=>{
       this.props.changeCurrentPage(page)
       this.props.changeLoading()
       getUsers(page).then(res => {
           this.props.changeLoading()
           this.props.getFrainds(res.data.items)
       })

   }

   serverFollow = (id) =>{
       this.props.followUnFollow(true,id)
       axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,{},
           { withCredentials: true,
                    headers: {"API-KEY":"3a6c91f3-20a3-4e43-a773-5e4856b6062d"}
           }).
       then(res => {
            if(res.data.resultCode == 0){
                console.log("Положительный ответ от сервера ")
                this.props.follow(id)

            }
           this.props.followUnFollow(false,id)

       })
   }

    serverUnFollow = (id) =>{
        this.props.followUnFollow(true,id)
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
            { withCredentials: true,
                headers: {"API-KEY":"3a6c91f3-20a3-4e43-a773-5e4856b6062d"}
            }).
        then(res => {
            if(res.data.resultCode == 0){
                console.log("Положительный ответ от сервера ")
                this.props.unfollow(id)

            }
            this.props.followUnFollow(false,id)
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
                    return <div className={"friend"}>
                        <NavLink to={'/profile/'+ fraind.id}>
                        <img className={"fraindimg"} src="https://www.youregypttours.com/storage/User_font_awesome.svg-1652016814.png"/>
                        </NavLink>
                        <h3>{fraind.name}</h3>
                        <div>
                            {fraind.followed ?
                                //<button onClick={() => this.props.unfollow(fraind.id)}>unFollow</button> :
                                <button disabled={this.props.changeListUser.some(id =>id === fraind.id)} onClick={() => this.serverUnFollow(fraind.id)}>unFollow</button> :
                                //<button onClick={() => this.props.follow(fraind.id)}>Follow</button>}
                                <button disabled={this.props.changeListUser.some(id =>id === fraind.id)} onClick={() => this.serverFollow(fraind.id)}>Follow</button>}
                        </div>
                    </div>
                })}
            </div>)


    }
}


export default FraindsClass;