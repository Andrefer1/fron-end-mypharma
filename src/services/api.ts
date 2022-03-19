import { create } from "apisauce";

export const api = create({
  // baseURL: "https://teste123445.herokuapp.com",
  baseURL: "http://localhost:3333",
});

// api.get("/products").then((response) => {
//   if (response.ok) {
//     return console.log(response.status);
//   } else {
//     return console.log(response.problem, response.status);
//   }
// });

// api
//   .post(
//     "/products",
//     product
//     // { headers: { "content-type": "application/json" } }
//   )
//   .then((response) => {
//     if (response.ok) {
//       return console.log("OK", response.status);
//     } else {
//       return console.log(response.problem, response.status);
//     }
//   });
