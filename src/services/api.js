import axios from "axios";

const api = axios.create({ baseURL: 'https://mangut-backend.herokuapp.com'});

export default api;