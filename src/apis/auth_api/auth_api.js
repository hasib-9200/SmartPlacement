


import axios from "axios";

const API_URL = "http://localhost:8080/api/v1";

const login = async (username, password) => {
    return axios
        .post(API_URL + "/login", {
            username,
            password,
        })
        .then((response) => {
            console.log(response.data)
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.user));
            }
            return response.data;
        }).catch((error) => {
            throw error
        });
};

const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthApi = {
    login,
    logout,
    getCurrentUser,
};


export default AuthApi;