import queryString from 'query-string';
import axios, {baseUrl} from './axios';

const postData = require ('data/posts.json');
const userData = require ('data/users.json');
const commentData = require ('data/comments.json');

export default {
  getComment: async options => {
    const result = await axios.get (`${baseUrl}/comments/${options.commentId}`);
    return result.data;
  },
  getListCommentByAuthor: async options => {
    const result = await axios.get (`${baseUrl}/comments/${options.authorId}`);
    return result.data;
  },
  getListCommentByPost: async options => {
    // const result = await axios.get (`${baseUrl}/comments/${options.postId}`);
    // return result.data;

    const data = commentData.filter (item => item.post === options.postId);
    return data;
  },
  createComment: async options => {
    // const result = await axios.post (`${baseUrl}/comments`, options.data);
    // return result.data;

    return true;
  },
  updateComment: async options => {
    // const result = await axios.put (
    //   `${baseUrl}/comments/${options.commentId}`,
    //   options.data
    // );
    // return result.data;

    return true;
  },
  deleteComment: async options => {
    // const result = await axios.delete (
    //   `${baseUrl}/comments/${options.commentId}`
    // );
    // return result.data;

    return true;
  },
};
