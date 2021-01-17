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
      console.log("mm", data)
    return axios.post(API_URL + "addVariety", data)
    .then(response => {
      return response.data
    })
  }

}

export default new AuthService();
