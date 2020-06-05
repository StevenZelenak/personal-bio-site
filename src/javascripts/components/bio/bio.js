import utils from '../../helpers/utils';
import './bio.scss';

const buildBioPage = () => {
  let domString = '';
  domString += '<div class="bio-container">';
  domString += '<div>';
  domString += '<img src="https://i.imgur.com/KMZHYxC.jpg" class="center mb-5 mt-4 bio-img" alt="...">';
  domString += '</div>';
  domString += '<div class="px-5 py-5 bio">';
  // eslint-disable-next-line quotes
  domString += `<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
  galley of type and scrambled it to make a type specimen book. It has
  survived not only five centuries, but also the leap into electronic typesetting, remaining
   essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
    containing Lorem Ipsum passages, and more recently with desktop publishing
  software like Aldus PageMaker including
   versions of Lorem Ipsum.Lorem Ipsum is simply dummy te
   xt of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
  of type and scrambled it to make a type specimen book. It 
  has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
  Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of 
  Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
  text ever since the 1500s, when an unknown printer took a galley of type and 
  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
  in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`;
  domString += '</div>';
  domString += '</div>';

  utils.printToDom('sz-bio', domString);
};

export default {
  buildBioPage,
};
