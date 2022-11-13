import instance from './index';
import { Project } from '../global/interfaces';

const ROUTE = 'projects';

interface ProjectResponse {
  projects: Project[];
}

interface ProjectCreateRequest {
  name: string,
  userId: string
}

const getAll = async () => {
  const response = await instance.get<ProjectResponse>(ROUTE);
  return response.data.projects;
}

const create = async (request: ProjectCreateRequest) => {
  const response = await  instance.post(ROUTE, {
    name: request.name,
    userId: request.userId
  });
  return response.data;
}

const remove = async (id: string) => {
  const response = await instance.delete(ROUTE + `/${id}`);
  return response.data;
}

export const projectsAPI = {
  getAll,
  create,
  remove
};