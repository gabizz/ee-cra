import axios from 'axios';
import Config from '../Config';
const AxiosUpload = () => {

    const conf = Config[process.env.NODE_ENV];
   
    const defaultOptions = {
        baseURL: conf.API_PATH,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        url: '/upload',
        method: 'POST',
      };

    let instance = axios.create(defaultOptions);

    instance.interceptors.request.use(function (config) {
        // console.log(conf.APP_NAME);
        const ls = localStorage.getItem(conf.NAMESPACE) ? JSON.parse(localStorage.getItem(conf.NAMESPACE)) : null;
        config.headers['x-auth-token'] =  ls && ls.token ? ls.token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExNzkyODQ3MzAwNjU0MzI4NDI5MSIsIm5hbWUiOiJHYWJyaWVsIE1hZnRlaSIsImVtYWlsIjoiZ21hZnRlaUBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDYuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1xQXNaSXRxd25jcy9BQUFBQUFBQUFBSS9BQUFBQUFBQS1QTS9DWFpFLWxVYzJGZy9waG90by5qcGciLCJzdHJhdGVneSI6Imdvb2dsZSIsImlhdCI6MTU0Njc2NDE0MiwiZXhwIjoxNTg2MTg0MTQyfQ.AfqJhJTsS5YcQzawsspNQZl516BSfMuuorY_FYmFq5s';
        config.headers['APP'] = conf.APP_NAME;
        return config;

    });
  return instance;
}

export default AxiosUpload();