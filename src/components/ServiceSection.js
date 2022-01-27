import React from 'react';
import { MdDraw, MdLaptopWindows, MdPhoneAndroid } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      min-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="what i will do for you" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDraw />}
            title="Graphic Design"
            desc="Using software such as the Adobe / Affinity range, i am able to meet all your required needs. Be it a logo or branding, the designs are tailored to your specific need."
          />
          <ServicesSectionItem
            icon={<MdLaptopWindows />}
            title="Front End Web Development"
            desc="Languages covered include HTML, CSS, SCSS, JavaScript and React JS."
          />
          <ServicesSectionItem
            icon={<MdPhoneAndroid />}
            title="UX Design"
            desc="Using software such as the Adobe / Figma range, i am able to work in to deliver your required needs, which will also include working prototypes that can be shared and tested."
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
