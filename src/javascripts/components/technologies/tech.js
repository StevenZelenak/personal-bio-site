import utils from '../../helpers/utils';
import './tech.scss';

const buildTechPage = () => {
  let domString = '';

  domString += '<div class="skillDiv">';
  domString += '<p>HTML</p>';
  domString += '<div class="skillContainer">';
  domString += '<div class="skills html">80%</div>';
  domString += '</div>';

  domString += '<p>CSS</p>';
  domString += '<div class="skillContainer">';
  domString += '<div class="skills css">45%</div>';
  domString += '</div>';

  domString += '<p>JavaScript</p>';
  domString += '<div class="skillContainer">';
  domString += '<div class="skills js">65%</div>';
  domString += '</div>';

  domString += '<p>Firebase</p>';
  domString += '<div class="skillContainer">';
  domString += '<div class="skills firebase">15%</div>';
  domString += '</div>';

  domString += '<p>Github</p>';
  domString += '<div class="skillContainer">';
  domString += '<div class="skills github">40%</div>';
  domString += '</div>';

  domString += '<p>Bootstrap</p>';
  domString += '<div class="skillContainer">';
  domString += '<div class="skills bootstrap">50%</div>';
  domString += '</div>';

  domString += '</div>';

  utils.printToDom('sz-tech', domString);
};

export default {
  buildTechPage,
};
