import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Chris Chapman</h1>
          <PText>
            A freelancer from Melbourne, Australia. I enjoy creating and
            collaborating. With my experience i am able to apply skills and
            techniques in different areas.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+61 448 744 486',
                path: 'tel:+61 448 744 486',
              },
              {
                title: 'chris.dbc.chapman@outlook.com',
                path: 'mailto:chris.dbc.chapman@outlook.com',
              },
              {
                title: 'Melbourne, Victoria, Australia',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/chris-chapman-a1b4a6133',
              },
              {
                title: 'Youtube',
                path:
                  'https://www.youtube.com/channel/UCx_DmmuwwvR-p2dMuBqzKXQ',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/tha_real_misfit/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - Chris Chapman |{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/chris-chapman-a1b4a6133"
            >
              DBC
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
