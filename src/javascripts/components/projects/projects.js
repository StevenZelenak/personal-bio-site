import utils from '../../helpers/utils';
import projectsData from '../../helpers/data/projectsData';

const createProjectCards = () => {
  const projects = projectsData.getProjects();
  let domString = '';

  projects.forEach((project) => {
    domString += '<div class = "cards cards-bg">';
    domString += `<h2>${project.title}</h2> `;
    domString += '<div class = "cardsContent">';
    domString += `<div class = "imgDiv"><img src=${project.screenshot} alt=""></div>`;
    domString += `<p>${project.description}</p> `;
    domString += `<p>${project.technologiesUsed}</p> `;
    domString += `<p>${project.url}</p> `;
    domString += `<p>${project.githubUrl}</p> `;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });

  utils.printToDom('projectsPage', domString);
};

export default {
  createProjectCards,
};
