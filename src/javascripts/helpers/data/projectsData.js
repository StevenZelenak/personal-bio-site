const projects = [{
  title: 'Tamagotchi',
  screenshot: '../../../Screenshots/tamoScreen.png',
  description: `In this project we used what we learned of ES6 modules and SASS to create a Tamagotchi. 
  The Tamagotchi has four values eat, fight, play, sleep. Which go up or down depending on the button you click.`,
  technologiesUsed: 'HTML, SCSS, JavaScript, Modules, Version Control with Github',
  available: true,
  url: 'https://github.com/StevenZelenak/tamagotchi-project',
  githubUrl: 'https://github.com/StevenZelenak/tamagotchi-project',
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

const getProjects = () => projects;

export default {
  getProjects,
};
