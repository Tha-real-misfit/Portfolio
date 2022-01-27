import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
// import Button from '../components/Button';
import AboutImg from '../images/vector_me.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import SectionTitle from '../components/SectionTitle';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
      color: var(--blue);
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .CV {
    font-size: 2rem;
    text-decoration: underline;
    color: var(--pink);
    font-family: 'Montserrat SemiBold';
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .CV {
      font-size: 1.2rem;
      text-decoration: underline;
      color: var(--green);
      font-family: 'Montserrat SemiBold';
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <SectionTitle heading="About" subheading="A little history" />
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Chris Chapman </span>
            </p>
            <h2 className="about__heading">A freelancer & creative</h2>
            <div className="about__info">
              <PText>
                From a young age, i had always enjoyed expressing myself
                creatively. With the combination of design and technology, i
                still to this day have a strong interest on what can be done.
                <br />
                <br />
                I have found that the possibilities are endless when it comes to
                being creative. Using different mediums, i have spent the last
                several years studying different fields of design.
                <br />
                <br />
                My passion started out with Graphic Design within my teenage
                years, that then went onto videography. I have since gained a
                love for web design and ux.
              </PText>
            </div>

            {/* <Button btnText="Download CV" btnLink="#" /> */}

            <h2 className="about__heading">
              <PText>
                {' '}
                <a
                  className="CV"
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/file/d/1dfQRaXQemhmv_d3lKT3wnLlfeS-CvLUd/view?usp=sharing"
                >
                  download resume here
                </a>{' '}
              </PText>
            </h2>
          </div>
          <div className="right">
            <img src={AboutImg} alt="chris" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">EDUCATION</h1>
            <AboutInfoItem
              title="Online"
              sub="Certificate Front End Web Design"
              items={['General Assembly']}
            />
            <AboutInfoItem
              title="Online"
              sub="Diploma Digital Media"
              items={['Central Queensland University']}
            />
            <AboutInfoItem
              title="Online"
              sub="Diploma Graphic Design"
              items={['Shaw Academy']}
            />
            <AboutInfoItem
              title="Online"
              sub="Diploma Graphic Design"
              items={['Open Colleges']}
            />
            <AboutInfoItem
              title="Online"
              sub="Certificate Project Management"
              items={['Nsw Tafe']}
            />
            <AboutInfoItem
              title="Plumbing"
              sub="Certificate Plumbing and Gasfitting"
              items={['Apprenticeships Victoria']}
            />
            <AboutInfoItem
              title="School"
              sub="VCE"
              items={['Lilydale High School']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">MY SKILLS</h1>
            <AboutInfoItem title="UX" items={['XD', 'Figma']} />
            <AboutInfoItem
              title="Video"
              items={['Premier Pro', 'After Effects', 'Filmora']}
            />
            <AboutInfoItem
              title="Front End"
              items={['HTML', 'CSS', 'SCSS', 'JavaScript', 'React']}
            />
            <AboutInfoItem
              title="Graphics"
              items={[
                'Photoshop',
                'Illustrator',
                'InDesign',
                'Photo',
                'Designer',
                'Publisher',
              ]}
            />
            <AboutInfoItem title="Other" items={['Microsoft', 'SalesForce']} />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">EXPERIENCES</h1>
            <AboutInfoItem
              title="2021"
              items={[
                'Victorian Government Digital Jobs Career Change - Cognizant',
              ]}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
