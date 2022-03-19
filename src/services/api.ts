import { create } from "apisauce";

export const api = create({
  baseURL: process.env.REACT_APP_API_URL,
});
