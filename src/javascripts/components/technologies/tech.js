import utils from '../../helpers/utils';
import './tech.scss';

const buildTechPage = () => {
  let domString = '';

  domString += '<div class="skillDiv">';
  domString += '<p>HTML5 || CSS3 || Javascript || Bootstrap 4 || Firebase || Github || React || C# || .Net Core || T-SQL</p>';
  domString += '</div>';

  utils.printToDom('sz-tech', domString);
};

export default {
  buildTechPage,
};
