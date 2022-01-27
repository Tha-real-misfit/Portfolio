import { v4 as uuidv4 } from 'uuid';
import grand from '../../images/grand1.jpg';
import ashLogo from '../../images/ash logo-01.png';
import telstra from '../../images/tscreens.png';
import skate from '../../images/skatescreen2.png';
import cocos from '../../images/cafescreen1.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Endless Summer Moments',
    desc: 'A logo for a photography company. Created using Adobe Photoshop.',
    img: ashLogo,
  },
  {
    id: uuidv4(),
    name: 'Outdoor Summer App',
    desc:
      'An adventure app for all things outdoors in the summertime. Created using Figma.',
    img: telstra,
  },
  {
    id: uuidv4(),
    name: 'Skateboarding',
    desc:
      'A website dedicated to skateboarding. Created using Atom. Languages include HTML, CSS, JavaScript.',
    img: skate,
  },
  {
    id: uuidv4(),
    name: 'Grand Hotel',
    desc: 'A logo for a local pub. Created using Adobe Illustrator.',
    img: grand,
  },
  {
    id: uuidv4(),
    name: "Coco's Cafe",
    desc: 'A local cafe app created using Adobe XD.',
    img: cocos,
  },
];

export default projects;
