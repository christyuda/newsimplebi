function apiGetRequest(url, callback) {
  const getapi = new XMLHttpRequest();
  getapi.open("GET", url, true);
  getapi.onreadystatechange = () => {
    if (getapi.readyState === 4) {
      if (getapi.status === 200) {
        const response = JSON.parse(getapi.responseText);
        callback(null, response);
      } else {
        callback(new Error("Request failed"), null);
      }
    }
  };
  getapi.send();
}

const apiUrl = "https://simbe-dev.ulbi.ac.id/api/v1/admins/"; // Ganti dengan URL API yang sesuai
apiGetRequest(apiUrl, (error, response) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Response:", response);
    // Lakukan manipulasi data atau tindakan lain dengan response dari API
  }
});
