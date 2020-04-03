import utils from '../../helpers/utils';
import projectsData from '../../helpers/data/projectsData';

const createProjectCards = () => {
  const projects = projectsData.getProjects();
  let domString = '';

  projects.forEach((project) => {
    domString += '<div class="card mb-5 projectCards project-text" style="max-width: 100%;">';
    domString += '<div class="row no-gutters">';
    domString += '<div class="col-md-6">';
    domString += `<img src=${project.screenshot} class="card-img" alt="...">`;
    domString += '</div>';
    domString += '<div class="col-md-6">';
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${project.title}</h5>`;
    domString += `<p class="card-text">${project.description}</p>`;
    domString += '<div class="my-2">';
    domString += `<a href=${project.githubUrl}><i class="github-icon mx-3 fa-3x fab fa-github"></i></a>`;
    domString += `<a href=${project.githubUrl}><i class="firebase-icon mx-3 fa-3x fas fa-fire"></i></a>`;
    domString += '</div>';
    domString += `<p class="card-text"><small class="tech-text">${project.technologiesUsed}</small></p>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });

  utils.printToDom('projectsPage', domString);
};

export default {
  createProjectCards,
};
