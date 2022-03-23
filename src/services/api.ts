import { create } from "apisauce";

export const api = create({
  // baseURL: "http://localhost:3333",
  baseURL: "https://back-end-mypharma.herokuapp.com",
  // baseURL: process.env.API_URL,
});
