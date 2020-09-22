import axios from "axios";

const request = axios.create({
  baseURL: "https://www.breakingbadapi.com/api/",
});

export default request;
