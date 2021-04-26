import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/projects.json`)
    .then((response) => {
      const theProjects = response.data;
      const projects = [];
      Object.keys(theProjects).forEach((projectId) => {
        theProjects[projectId].id = projectId;
        projects.push(theProjects[projectId]);
      });

      resolve(projects);
    })
    .catch((err) => reject(err));
});

export default {
  getProjects,
};
