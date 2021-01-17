import axios from "axios";

// const API_URL = "http://localhost:4000/";
const API_URL = "https://aviosshop.herokuapp.com/";

class AuthService {
  getProducts() {
    return axios.get(API_URL + "products")
    .then(response => {
      return response.data
    })
  }

  uploadVarieties(data) {
    return axios.post(API_URL + "addVariety", data)
    .then(response => {
      return response.data
    })
  }

  addProduct(data) {
    return axios.post(API_URL + "addProduct", data)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error)
    })
  }

  getVarietiesByProductId(id) {
    return axios.get(API_URL + "productVariety/" + id)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error)
    })
  }
}

export default new AuthService();
