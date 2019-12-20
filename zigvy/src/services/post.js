import queryString from 'query-string';
import axios, {baseUrl} from './axios';

const postData = require ('data/posts.json');
const userData = require ('data/users.json');
const commentData = require ('data/comments.json');

export default {
  getPost: async options => {
    const result = await axios.get (`${baseUrl}/posts/${options.postId}`);

    return result.data;
  },
  getListPost: async options => {
    // const params = queryString.stringify (options.paging, options.filter);
    // const result = await axios.get (
    //   `${baseUrl}/posts${params ? `?${params}` : ''}`
    // );
    // return result.data;
    return postData;
  },
  getListPostByAuthor: async options => {
    // const params = queryString.stringify (options.paging);
    // const result = await axios.get (
    //   `${baseUrl}/posts/${options.authorId}${params ? `?${params}` : ''}`
    // );
    // return result.data;

    const data = postData.filter (item => item.owner == options.authorId);

    return {data, total: data.length, limit: options.paging.limit, offset: 0};
  },
  createPost: async options => {
    // const result = await axios.post (`${baseUrl}/posts`, options.data);
    // return result.data;

    return true;
  },
  updatePost: async options => {
    // const result = await axios.put (
    //   `${baseUrl}/posts/${options.postId}`,
    //   options.data
    // );
    // return result.data;

    return true;
  },
  deletePost: async options => {
    // const result = await axios.delete (`${baseUrl}/posts/${options.postId}`);
    // return result.data;

    return true;
  },
};
