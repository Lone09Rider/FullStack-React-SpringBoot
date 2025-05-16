import axios from "axios";

const BASE_API = "http://localhost:8080/api/products";

class ProductService {
    getProducts(){
        return axios.get(BASE_API);
        // return axios.get(BASE_API+"/all");
    }


    insertProduct(products){
        return axios.post(BASE_API, products);
        // return axios.post(BASE_API+"/add");
    }

    findById(id) {
        return axios.get(`${BASE_API}/find/${id}`);
    }

    updateProduct(id, product) {
        return axios.put(`${BASE_API}/${id}`, product);
    }

    deleteProduct(id) {
        return axios.delete(`${BASE_API}/${id}`);
    }
}

export default new ProductService();