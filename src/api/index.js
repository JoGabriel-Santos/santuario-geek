import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:5000' });

/*
    API.interceptors.request.use((request) => {
        if (localStorage.getItem('profile')) {
            request.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile'))['token']}`
        }

        return request
    })
 */

export const signin = (userInfo) => API.post("/user/signin", userInfo);
export const signup = (userInfo) => API.post("/user/signup", userInfo);

export const fetchProducts = () => API.get(`/product/fetchProducts`);
export const addProduct = (productInfo) => API.post("/product/addProduct", productInfo);