import { v4 as uuidv4 } from 'uuid';
import Stationary from '../../images/livelife.jpg';
import Snow from '../../images/snowscreen1.png';
import Lms from '../../images/LMS logo.png';
import Skate from '../../images/skateWebCode.png';
import Pizza from '../../images/welcome-full.jpg';
import Ready from '../../images/tatt.png';
import Run from '../../images/photo2.png';
import Cream from '../../images/creamella.jpg';
import Boxing from '../../images/boxing.jpg';
import Stay from '../../images/stay home.jpg';

const recent = [
  {
    id: uuidv4(),
    name: 'Snowboarding',
    desc:
      'A Snowboarding website, created with Adobe Dreamweaver using HTML & CSS.',
    img: Snow,
  },
  {
    id: uuidv4(),
    name: 'Little Miss Summer',
    desc:
      "A series of self published children's books, created with Adobe Indesign.",
    img: Lms,
  },
  {
    id: uuidv4(),
    name: 'Skateboarding',
    desc:
      'The code used for the skateboarding website, created using Atom. Languages include HTML, CSS, JavaScript.',
    img: Skate,
  },
  {
    id: uuidv4(),
    name: 'Stationary',
    desc: 'A stationary line, created using Adobe Illustrator.',
    img: Stationary,
  },
  {
    id: uuidv4(),
    name: 'Pizza Time',
    desc: 'A local pizza app wireframe, created with Adobe XD.',
    img: Pizza,
  },
  {
    id: uuidv4(),
    name: 'Ready To Ink',
    desc: 'A local tattoo studio logo, created with Adobe Illustrator.',
    img: Ready,
  },
  {
    id: uuidv4(),
    name: 'Animation',
    desc: 'An animation, created with Adobe Photoshop.',
    img: Run,
  },
  {
    id: uuidv4(),
    name: 'Creamella',
    desc: 'A face cream brand, created with Adobe Photoshop.',
    img: Cream,
  },
  {
    id: uuidv4(),
    name: 'Bout Boxing',
    desc: 'A boxing gym logo, created with Adobe Photoshop.',
    img: Boxing,
  },
  {
    id: uuidv4(),
    name: 'Stay Home, Save Lives',
    desc: 'Typography art work, created with Adobe Illustrator.',
    img: Stay,
  },
];

export default recent;
