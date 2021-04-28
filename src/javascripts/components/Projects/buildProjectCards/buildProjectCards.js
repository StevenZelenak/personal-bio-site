import projectData from '../../../helpers/data/projectData';
import utils from '../../../helpers/utils';
import createProjectCards from '../createProjectCards/createProjectCards';

const buildProjects = () => {
  const projects = projectData.getProjects;
  console.log(projects);
  let domString = '';
  domString += '<div id="projectsPage" class="container py-2 px-2 rounded">';
  projects.forEach((project) => {
    domString += createProjectCards.createProjectCards(project);
  });
  domString += '</div>';
  utils.printToDom('sz-projects', domString);
};

export default {
  buildProjects,
};
