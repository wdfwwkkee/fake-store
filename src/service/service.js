import axios from "axios";

export const service = {


    async getProducts() {
        const responce = await axios.get("http://localhost:8080/products");
        return responce.data;
    }


}