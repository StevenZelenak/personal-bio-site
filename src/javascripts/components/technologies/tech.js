import utils from '../../helpers/utils';
import './tech.scss';

const buildTechPage = () => {
  let domString = '';

  domString += 'tech';

  utils.printToDom('sz-tech', domString);
};

export default {
  buildTechPage,
};
