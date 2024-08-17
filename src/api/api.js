import axios from "axios";


export const getUsers = (page) =>{
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${4}`,
        {withCredentials: true})

}