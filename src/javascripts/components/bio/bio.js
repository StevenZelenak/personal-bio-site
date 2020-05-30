import utils from '../../helpers/utils';
import './bio.scss';

const buildBioPage = () => {
  let domString = '';
  domString += '<div class="container">';
  domString += '<div>';
  domString += '<img src="https://i.imgur.com/KMZHYxC.jpg" class="center mb-5 mt-4" alt="...">';
  domString += '</div>';
  domString += '<div class="px-5 py-5 bio">';
  // eslint-disable-next-line quotes
  domString += `<p> I have been playing video-games for as long as I can remember. When I was younger I would constantly draw up designs for what I would put in a game if I had the ability to make one. As life went on I tried to learn to code on and off thinking just a little more and I will finally be able to make a game. Except the dreaded higher concepts of coding came in and said "You shall not pass!". I was about to give up hope on ever learning to code, that was when I heard about Nashville Software School. I didn't believe I had what it took to become a programmer but thanks to the teachers at NSS I can't believe I didn't go to school sooner. Everyday the concepts get more challenging but I can't think of anything else I would rather be doing right now.`;
  domString += '</div>';
  domString += '</div>';

  utils.printToDom('sz-bio', domString);
};

export default {
  buildBioPage,
};
