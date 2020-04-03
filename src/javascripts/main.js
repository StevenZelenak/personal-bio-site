import '../styles/main.scss';
import 'bootstrap';
import projects from './components/projects/projects';

const openPage = () => {
  $('#sz-link-games').click(() => {
    $('#sz-games').removeClass('hide');
    $('#sz-bio').addClass('hide');
    $('#sz-tech').addClass('hide');
    $('#sz-projects').addClass('hide');
    $('#sz-homepage').addClass('hide');
  });
  $('#sz-link-homepage').click(() => {
    $('#sz-games').addClass('hide');
    $('#sz-bio').addClass('hide');
    $('#sz-tech').addClass('hide');
    $('#sz-projects').addClass('hide');
    $('#sz-homepage').removeClass('hide');
  });
  $('#sz-link-tech').click(() => {
    $('#sz-games').addClass('hide');
    $('#sz-bio').addClass('hide');
    $('#sz-tech').removeClass('hide');
    $('#sz-projects').addClass('hide');
    $('#sz-homepage').addClass('hide');
  });
  $('#sz-link-bio').click(() => {
    $('#sz-games').addClass('hide');
    $('#sz-bio').removeClass('hide');
    $('#sz-tech').addClass('hide');
    $('#sz-projects').addClass('hide');
    $('#sz-homepage').addClass('hide');
  });
  $('#sz-link-projects').click(() => {
    $('#sz-games').addClass('hide');
    $('#sz-bio').addClass('hide');
    $('#sz-tech').addClass('hide');
    $('#sz-projects').removeClass('hide');
    $('#sz-homepage').addClass('hide');
  });
};

const init = () => {
  openPage();
  projects.createProjectCards();
};

init();
