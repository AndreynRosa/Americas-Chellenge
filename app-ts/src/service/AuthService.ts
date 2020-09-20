import api from './api';

class AuthService {
  async autheticate(email: string, password: string) {
    const reponse = await api.autheticate.post('', { email, password });
    return reponse;
  }
}
export default AuthService;
