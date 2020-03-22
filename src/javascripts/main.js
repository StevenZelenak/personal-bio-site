import '../styles/main.scss';
import 'bootstrap';

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
};

const init = () => {
  openPage();
};

init();
