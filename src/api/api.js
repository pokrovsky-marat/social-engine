import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "6197b56b-a973-486a-918e-860f7c5323e8"},
});
export const api = {
    getUsers(page = 1, count = 10) {
        return instance
            .get(`users?page=${page}&count=${count}`)
            .then((response) => response.data);
    },
    getUser(id) {
        console.warn(
            "This method is obsolete, Please use profileApi.getUserProfile(id)"
        );
        return profileApi.getUserProfile(id);
    },

    /*    authMe() {
          console.warn("This method is obsolete, Please use authApi.authMe() method")
          return authApi.authMe()
      },*/
    unfollow(id) {
        return instance.delete(`follow/${id}`).then((response) => response.data);
    },
    follow(id) {
        return instance.post(`follow/${id}`).then((response) => response.data);
    },
};
export const profileApi = {
    getUserProfile(id) {
        return instance.get(`profile/${id}`).then((response) => response.data);
    },
    getStatusProfile(id) {
        return instance
            .get(`profile/status/${id}`)
            .then((response) => response.data);
    },
    updateStatusProfile(status) {
        return instance
            .put(`profile/status`, {status})
            .then((response) => response.data);
    },
    updateProfilePhoto(image) {
        let formData = new FormData();
        formData.append("image", image);
        /*     return instance
          .put("profile/photo", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => response.data); */

        return axios
            .put(
                "https://social-network.samuraijs.com/api/1.0/profile/photo",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "API-KEY": "6197b56b-a973-486a-918e-860f7c5323e8",
                    },
                    withCredentials: true,
                }
            )
            .then((response) => response.data);
    },

    updateProfileData(data) {
        debugger
        return instance
            .put(`profile`, {...data})
            .then((response) => response.data);
    },
};
export const authApi = {
    authMe() {
        return instance.get(`auth/me`).then((response) => response.data);
    },
    authLogin(data) {
        return instance
            .post(`auth/login`, {...data})
            .then((response) => response.data);
    },
    authLogOut() {
        return instance.delete(`auth/login`).then((response) => response.data);
    },
};
export const securityApi = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`).then((response) => response.data);
    },

};