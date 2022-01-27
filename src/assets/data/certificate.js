import { v4 as uuidv4 } from 'uuid';
import GDA from '../../images/gdadiploma.png';
import DM from '../../images/Digital media diploma.jpg';
import GD from '../../images/gddiploma.jpg';
import FE from '../../images/front end cert.jpg';
import THA from '../../images/hackathon.png';

const certificate = [
  {
    id: uuidv4(),
    name: 'Digital Media Diploma',
    desc: 'Central Queensland University.',
    img: DM,
  },
  {
    id: uuidv4(),
    name: 'Graphic Design Diploma',
    desc: 'NSW Tafe.',
    img: GD,
  },
  {
    id: uuidv4(),
    name: 'Front End Web Design Certificate',
    desc: 'General Assembly.',
    img: FE,
  },
  {
    id: uuidv4(),
    name: 'Graphic Design Advance Diploma',
    desc: 'Shaw Academy.',
    img: GDA,
  },
  {
    id: uuidv4(),
    name: 'Telstra Hackathon Award',
    desc: 'Cognizant.',
    img: THA,
  },
];

export default certificate;
