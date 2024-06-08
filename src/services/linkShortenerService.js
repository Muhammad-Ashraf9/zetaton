const axios = require("axios");

const { shareaholicAPIKey, shareaholicAPIURL } = require("../config");

const shortenLink = async (url) => {
  try {
    const response = await axios.get(`${shareaholicAPIURL}`, {
      params: {
        apikey: shareaholicAPIKey,
        url: url,
      },
      headers: {
        // used to solve the problem of returning html instead of json
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0. 0.0 Safari/537.36",
      },
    });
    return response.data?.data;
    // console.log("response :>> ", response);
    // const response = await fetch(
    //   `${shareaholicAPIURL}?apikey=${shareaholicAPIKey}&url=${url}`
    // );
    // const { data } = await response.json();
    // return data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  shortenLink,
};
