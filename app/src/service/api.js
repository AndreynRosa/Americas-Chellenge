import axios from 'axios';
import { BASIC_URL } from '../config';
import { getToken } from './localSrogaService';

const api = {
  autheticate: axios.create({
    baseURL: BASIC_URL + '/authenticate',
  }),
  project: axios.create({
    baseURL: BASIC_URL + '/project',
  }),
};

api.project.defaults.headers.Authorization =  `Bearer ${getToken()}`;

export default api;
