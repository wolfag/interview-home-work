import queryString from "query-string";
import axios, { baseUrl } from "./axios";

const postData = require("data/posts.json");
const userData = require("data/users.json");
const commentData = require("data/comments.json");

export default {
  login: async options => {
    // const result = await axios.post(`${baseUrl}/login`, options.data);
    // return result.data;

    const user = userData.find(
      item =>
        item.username === options.username && item.password === options.password
    );

    if (user) {
      return user;
    } else {
      throw Error("Wrong username or password!!!");
    }
  }
};
