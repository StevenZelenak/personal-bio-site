import utils from '../../helpers/utils';
import './bio.scss';

const buildBioPage = () => {
  let domString = '';
  domString += '<div class="bio-container">';
  domString += '<div>';
  domString += '<img src="https://i.imgur.com/KMZHYxC.jpg" class="center mb-5 mt-4 bio-img" alt="...">';
  domString += '</div>';
  domString += '<div class="px-5 py-5 bio">';
  domString += '<h1 class="text-center my-3">Who am I?</h1>';
  // eslint-disable-next-line quotes
  domString += `<p>I am someone who loves to learn new skills and meet new people. Through-out my life I have constantly 
  tried to find a way to improve myself and find a skill or trade that I want to do.
  During this journey I have worked as a server, dishwasher, grill cook, kitchen manager, 
  manual machinist, cnc machinist, and machine shop manager. Each of these roles allowed me to pick up new skills and learn more about myself.
  In time I learned enough about myself to know I was not happy in any of these roles. 
  That they just were not interesting to me, so I thought to myself long and hard. Asking myself the same question over and over "what do I want to do?".
  The answer was obvious I want to program videogames because I love video games. 
  Then the answer wasn't obvious becuase learning to program games on your own is
   hard as hell. I realized that I need to learn and understand more about the world of 
   programming and its nuances before tackling a task such as making a game.
  Which led me to NSS(Nashville Software School) I didn't think I would ever decide to go to school again. 
  School is expensive and being a manager while trying to learn a completely new skill sounded terrible (It is very terrible). 
  Still I felt like this would make me happier and to be honest programming has made me happier. 
  It is one of the most frustrating skills I have ever learned in my life but it is so much more rewarding than anything else I have ever done.</p>`;

  domString += '</div>';
  domString += '</div>';

  utils.printToDom('sz-bio', domString);
};

export default {
  buildBioPage,
};
