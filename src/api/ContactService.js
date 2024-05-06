import axios from "axios";

const API_URL = 'http://localhost:8080/products';

export async function saveProducts(products){
    return await axios.post(API_URL, products);
}

export async function getProducts(page = 0,size = 10){
    return await axios.get(`${API_URL}?page=${page}&size=${size}`);
}

export async  function deleteProduct(id) {
    return await axios.delete(`${API_URL}/${id}`);
}

export  async function updateProduct(products) {
    return await axios.post(API_URL, products);
}