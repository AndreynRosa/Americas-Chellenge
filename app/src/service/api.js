import axios from 'axios';
import { BASIC_URL } from '../config';

const api = {
  autheticate: axios.create({
    baseURL: BASIC_URL + '/authenticate',
  }),
  project: axios.create({
    baseURL: BASIC_URL + '/project',
  }),
};
export default api;
