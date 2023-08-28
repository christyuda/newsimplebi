import { CihuyGetCookie } from "https://c-craftjs.github.io/link/link.js";

let token = CihuyGetCookie("Login");

export function customGet(target_url, responseFunction) {
  let requestOptions = {
    method: "GET",
    redirect: "follow",
    Headers: {
      "Content-Type": "application/json",
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

customGet("https://simbe-dev.ulbi.ac.id/api/v1/admins/", token, handleResponse);
