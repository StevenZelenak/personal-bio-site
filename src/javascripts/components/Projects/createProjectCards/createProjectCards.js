const createProjectCards = (project) => {
  console.error(`${project.url}`);
  let domString = '';
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
  domString += `<p><a href=${project.githubUrl}>GitHub</a></p>`;
  domString += `<p><a href=${project.url}>Firebase</a></p>`;
  domString += '</div>';
  domString += `<p class="card-text"><small class="tech-text">${project.technologiesUsed}</small></p>`;
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default {
  createProjectCards,
};
