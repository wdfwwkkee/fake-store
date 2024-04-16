import axios from "axios";

export const service = {


    async getProducts() {
        const responce = await axios.get("https://my-json-server.typicode.com/wdfwwkkee/fake-store/products");
        return responce.data;
    },
    async getProductsById(id) {
        const responce = await axios.get(`https://my-json-server.typicode.com/wdfwwkkee/fake-store/products?id=${id}`);
        return responce.data[0];
    }


}