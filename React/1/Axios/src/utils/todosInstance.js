import axios from "axios";

export const todosInstance = axios.create({
    baseURL : 'http://localhost:3001'
  });