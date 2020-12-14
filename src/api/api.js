import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "6197b56b-a973-486a-918e-860f7c5323e8"}
})
export const api = {
    getUsers(page = 1, count = 10) {
        return instance.get(`users?page=${page}&count=${count}`).then(response => response.data)
    },
    getUser(id) {
        console.log("-------------------")
        console.warn("This method is obsolete, Please use profileApi.getUserProfile(id)")
        return profileApi.getUserProfile(id)
    },

    authMe() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    }
}
export const profileApi = {

    getUserProfile(id) {
        return instance.get(`profile/${id}`).then(response => response.data)
    },
    getStatusProfile(id) {
        return instance.get(`profile/status/${id}`).then(response => response.data)
    },
    updateStatusProfile(status) {
        return instance.put(`profile/status`,{status}).then(response => response.data)
    },



}



