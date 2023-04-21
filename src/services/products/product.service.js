import axios from 'axios';

export const productService = () => {
    return axios.get('https://api.pujakaitem.com/api/products');
};

export const singleProductService = (id) => {
    return axios.get(`https://api.pujakaitem.com/api/products?id=${id}`);
};
