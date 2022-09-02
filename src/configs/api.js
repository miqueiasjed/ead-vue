import axios from "axios";

let Api = axios.create({
  baseURL: "http://localhost/api/"
});

Api.defaults.withCredentials = true;

export default Api;