import axios from "axios";

const inctance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY":"3a6c91f3-20a3-4e43-a773-5e4856b6062d"}
})


export const getUsers = (page) =>{

    return inctance.get(`users?page=${page}&count=${4}`)

};

export const postFoolow = (id) =>{

    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,{},
        { withCredentials: true,
            headers: {"API-KEY":"3a6c91f3-20a3-4e43-a773-5e4856b6062d"}
        })

};

