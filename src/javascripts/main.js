import '../styles/main.scss';
import 'bootstrap';
import buildProjectCards from './components/Projects/buildProjectCards/buildProjectCards';
import bio from './components/bio/bio';
import tech from './components/technologies/tech';

const openPage = () => {
  $('#sz-link-homepage').click(() => {
    $('#sz-bio').addClass('hide');
    $('#sz-tech').addClass('hide');
    $('#sz-projects').addClass('hide');
    $('#sz-homepage').removeClass('hide');
  });
  $('#sz-link-tech').click(() => {
    $('#sz-bio').addClass('hide');
    $('#sz-tech').removeClass('hide');
    $('#sz-projects').addClass('hide');
    $('#sz-homepage').addClass('hide');
  });
  $('#sz-link-bio').click(() => {
    $('#sz-bio').removeClass('hide');
    $('#sz-tech').addClass('hide');
    $('#sz-projects').addClass('hide');
    $('#sz-homepage').addClass('hide');
  });
  $('#sz-link-projects').click(() => {
    $('#sz-bio').addClass('hide');
    $('#sz-tech').addClass('hide');
    $('#sz-projects').removeClass('hide');
    $('#sz-homepage').addClass('hide');
  });
};

const init = () => {
  openPage();
  buildProjectCards.buildProjects();
  bio.buildBioPage();
  tech.buildTechPage();
};

init();
