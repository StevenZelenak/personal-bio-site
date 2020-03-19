import '../styles/main.scss';
import 'bootstrap';


const projects = [{
  title: 'Cool Project',
  screenshot: 'https://cdn.shopify.com/s/files/1/0322/6897/files/404-permalink_1170x1170.png?432866230176278629',
  description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
  technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
  available: true,
  url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live.
  // Cool, right? Welp, until then, just use your GitHub link in this spot as well.
  githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
},
{
  title: 'Cool Project',
  screenshot: 'https://cdn.shopify.com/s/files/1/0322/6897/files/404-permalink_1170x1170.png?432866230176278629',
  description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
  technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
  available: true,
  url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live.
  // Cool, right? Welp, until then, just use your GitHub link in this spot as well.
  githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
},
{
  title: 'Cool Project',
  screenshot: 'https://cdn.shopify.com/s/files/1/0322/6897/files/404-permalink_1170x1170.png?432866230176278629',
  description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
  technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
  available: true,
  url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live.
  // Cool, right? Welp, until then, just use your GitHub link in this spot as well.
  githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
},
{
  title: 'Cool Project',
  screenshot: 'https://cdn.shopify.com/s/files/1/0322/6897/files/404-permalink_1170x1170.png?432866230176278629',
  description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
  technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
  available: true,
  url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live.
  // Cool, right? Welp, until then, just use your GitHub link in this spot as well.
  githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
}];

const outputDom = (divId, domstring) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = domstring;
};


const createProjectCards = () => {
  let domString = '';

  projects.forEach((project) => {
    domString += '<div class = "cards">';
    domString += `<h3>${project.title}</h3> `;
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


  outputDom('projectsPage', domString);
};

createProjectCards(projects);