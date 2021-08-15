import axios from "axios";

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com/',
};

let axiosInstance = axios.create(config);

const getAxiosUsers = () => {
    return axiosInstance.get('users');
}

const getAxiosUser = (id) => {
    return axiosInstance.get('users/' + id);
}

const getPostOfUser = (id) => {
    return axiosInstance.get('users/' + id + '/posts')
}


export {getAxiosUsers, getAxiosUser, getPostOfUser};