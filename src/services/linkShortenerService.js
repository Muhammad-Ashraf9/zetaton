const axios = require("axios");

const { shareaholicAPIKey, shareaholicAPIURL } = require("../config");

const shortenLink = async (url) => {
  try {
    // problem with axios
    // const response = await axios.get(
    //   `https://www.shareaholic.com/v2/share/shorten_link?apikey=${shareaholicAPIKey}&url=${url}`
    // );
    // return response.data;
    const response = await fetch(
      `${shareaholicAPIURL}?apikey=${shareaholicAPIKey}&url=${url}`
    );
    const { data } = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  shortenLink,
};
