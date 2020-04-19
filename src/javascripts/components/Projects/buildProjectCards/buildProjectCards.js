import projectData from '../../../helpers/data/projectData';
import utils from '../../../helpers/utils';
import createProjectCards from '../createProjectCards/createProjectCards';


const buildProjects = () => {
  projectData.getProjects()
    .then((projects) => {
      let domString = '';
      domString += '<h1 class="text-center">Projects</h1>';
      domString += '<div id="projectsPage" class="container py-2 px-2 rounded">';
      projects.forEach((project) => {
        domString += createProjectCards.createProjectCards(project);
      });
      domString += '</div>';
      utils.printToDom('sz-projects', domString);
      console.error(projects);
    })
    .catch((err) => console.error('get cows broke', err));
};

export default {
  buildProjects,
};
