import queryString from 'query-string';
import axios, {baseUrl} from './axios';

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
    const result = await axios.get (`${baseUrl}/comments/${options.postId}`);
    return result.data;
  },
  createComment: async options => {
    const result = await axios.post (`${baseUrl}/comments`, options.data);
    return result.data;
  },
  updateComment: async options => {
    const result = await axios.put (
      `${baseUrl}/comments/${options.commentId}`,
      options.data
    );
    return result.data;
  },
  deleteComment: async options => {
    const result = await axios.delete (
      `${baseUrl}/comments/${options.commentId}`
    );
    return result.data;
  },
};
