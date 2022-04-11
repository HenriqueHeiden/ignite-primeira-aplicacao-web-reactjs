import axios from 'axios';

export const api = axios.create({
    baseURL:'https://ignite-primeira-aplicacao-web-reactjs.vercel.app/api'
})
