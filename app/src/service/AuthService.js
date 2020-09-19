import api from './api';
import { getToken } from './localSrogaService';

class AuthService {
  headers = {
    Authorization: '',
    'Content-Access-Control-Allow-Origin': '*',
    'Content-Type': '',
  };
  constructor() {
    this.headers = {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    };
  }
  async autheticate(email, password) {
    console.log('service');
    const reponse = await api.autheticate.post(
      '',
      { email, password },
      {
        headers: this.headers,
        auth: {
          password: 'password',
          email: 'email',
        },
      }
    );
    return reponse;
  }
}
export default AuthService;
