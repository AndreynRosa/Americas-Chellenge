import api from './api';
import { getToken } from './localSrogaService';

class ProjectService {

  async findProjectByRole() {
    const reponse = await api.project.get('');
    return reponse;
  }
}
export default ProjectService;
