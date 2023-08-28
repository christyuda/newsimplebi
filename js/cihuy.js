import { CihuyGetCookie } from "https://c-craftjs.github.io/link/link.js";

let token = CihuyGetCookie("LOGIN");

export function customGet(target_url, responseFunction) {
  let requestOptions = {
    method: "GET",
    redirect: "follow",
    Headers: {
      "Content-Type": "application/json",
      LOGIN: token,
    },
  };

  fetch(target_url, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then((result) => responseFunction(JSON.parse(result)))
    .catch((error) => console.error("Error:", error));
}
export function handleResponse(responseData) {
  console.log(responseData);
}
let target_url = "https://simbe-dev.ulbi.ac.id/api/v1/admins/";
customGet(target_url, token, handleResponse);
