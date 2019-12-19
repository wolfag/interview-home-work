import queryString from 'query-string';
import axios, {baseUrl} from './axios';

export default {
  getPost: async options => {
    const result = await axios.get (`${baseUrl}/posts/${options.PostId}`);
    return result.data;
  },
  getListPost: async options => {
    const params = queryString.stringify (options.paging, options.filter);
    const result = await axios.get (
      `${baseUrl}/posts${params ? `?${params}` : ''}`
    );
    return result.data;
  },
  getListPostByAuthor: async options => {
    const params = queryString.stringify (options.paging);
    const result = await axios.get (
      `${baseUrl}/posts/${options.authorId}${params ? `?${params}` : ''}`
    );
    return result.data;
  },
  createPost: async options => {
    const result = await axios.post (`${baseUrl}/posts`, options.data);
    return result.data;
  },
  updatePost: async options => {
    const result = await axios.put (
      `${baseUrl}/posts/${options.PostId}`,
      options.data
    );
    return result.data;
  },
  deletePost: async options => {
    const result = await axios.delete (`${baseUrl}/posts/${options.PostId}`);
    return result.data;
  },
};
