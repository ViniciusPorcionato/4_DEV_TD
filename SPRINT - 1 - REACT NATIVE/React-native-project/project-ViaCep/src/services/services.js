import axios from "axios";

// const externaApi = `https://viacep.com.br/ws`;
const externaApi = `http://192.168.19.142:3000/cep`;

const api = axios.create({
    baseURL: externaApi
});

export default api;