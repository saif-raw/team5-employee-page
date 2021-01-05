const axios = require("axios");
const BASE_URL = "http://traniee-profile-backend.herokuapp.com";

export const data = async (params) => {
  let response = await axios.get(`${BASE_URL}${params}`);
  return response.data;
};
