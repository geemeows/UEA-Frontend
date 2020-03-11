import axios from "axios";

export const serverHttp = axios.create({
  baseURL: "http://localhost:8000/api"
  // baseURL: "http://upperegyptinaction.com/api"
});
