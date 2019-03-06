
import axios from 'axios';
import Config from '../Config';
import './Axios.css'
const Axios = () => {

    const conf = Config[process.env.NODE_ENV];
   
    const defaultOptions = {
        baseURL: conf.API_PATH,
        headers: {
          'Content-Type': 'application/json',
        },
      };

    let instance = axios.create(defaultOptions);

    instance.interceptors.request.use(function (config) {
        // console.log(conf.APP_NAME);
        const ls = localStorage.getItem(conf.NAMESPACE) ? JSON.parse(localStorage.getItem(conf.NAMESPACE)) : null;
        // config.headers['x-auth-token'] =  ls && ls.token ? ls.token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExNzkyODQ3MzAwNjU0MzI4NDI5MSIsIm5hbWUiOiJHYWJyaWVsIE1hZnRlaSIsImVtYWlsIjoiZ21hZnRlaUBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDYuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1xQXNaSXRxd25jcy9BQUFBQUFBQUFBSS9BQUFBQUFBQS1QTS9DWFpFLWxVYzJGZy9waG90by5qcGciLCJzdHJhdGVneSI6Imdvb2dsZSIsImlhdCI6MTU0Njc2NDE0MiwiZXhwIjoxNTg2MTg0MTQyfQ.AfqJhJTsS5YcQzawsspNQZl516BSfMuuorY_FYmFq5s';
        config.headers['x-auth-token'] =  ls && ls.token ? ls.token : ''
        if ( !config.headers['x-auth-token'] ) {
          return null
        }
        config.headers['APP'] = conf.APP_NAME;
        document.body.classList.add('loader');
        return config;

    });

    instance.interceptors.response.use(function (response) {
      // Do something with response data
      document.body.classList.remove('loader');
         return response;
    }, function (error) {
      // Do something with response error
      document.body.classList.remove('loader');
      return Promise.reject(error);
    }); 
  return instance;
}

export default Axios();