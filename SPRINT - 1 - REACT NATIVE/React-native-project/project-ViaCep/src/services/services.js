import axios from "axios";

const externaApi = `https://viacep.com.br/ws/`;

const api = axios.create({
    baseURL: externaApi
});

export default api;