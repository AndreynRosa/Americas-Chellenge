import api from './api';
import { getToken } from './localSrogaService';

class AuthService {
  async autheticate(email, password) {
    const reponse = await api.autheticate.post(
      '',
      { email, password },
      {
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
