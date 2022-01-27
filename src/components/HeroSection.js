import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { init } from 'ityped';
import HeroImg from '../images/portfolio.png';
import PText from './PText';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    .main {
      display: inline-block;
      width: 100%;
      color: var(--green);
    }
    .hero__name {
      font-size: 7rem;
      font-family: 'Montserrat SemiBold';
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -2rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 100px;
  }
  .hero__scrollDown {
    right: 100px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        font-size: 1.6rem;
        transform: rotate(-90deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
      }
    }
  }
  .word {
    color: var(--gray-1);
    font-size: 20px;
    margin-top: 50px;
    padding: 10px;
  }
  .classes {
    font-size: 35px;
    color: #ff69b4;
    margin: 20px;
    padding: 20px;
  }

  .ityped-cursor {
    animation: blink 1s infinite;
  }
  @keyframes blink {
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .main {
        color: var(--pink);
      }
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }

    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 20px;
      bottom: 5%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-right: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 20px;
      bottom: 17%;
      width: 20px;
      gap: 1rem;

      p {
        font-size: 1.3rem;
      }
    }
    .word {
      color: var(--gray-1);
      font-size: 2rem;
    }
    .classes {
      font-size: 2.5rem;
      color: var(--green);
      margin: 10px;
      padding: 10px;
    }
  }
`;

export default function HeroSection() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        'Author',
        'Developer',
        'Ux Designer',
        'Videographer',
        'Graphic Designer',
      ],
    });
  }, []);
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span className="main"> Hello, This is</span>
            <span className="hero__name"> Chris</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="me" />
          </div>
          <div className="hero__info">
            <PText>
              <h1 className="word">
                Freelance <br /> <span className="classes" ref={textRef} />
              </h1>
            </PText>
            <Button btnLink="/projects" btnText="see my works" />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="social media arrow" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/tha_real_misfit/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IG
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCx_DmmuwwvR-p2dMuBqzKXQ"
                    target="_blank"
                    rel="noreferrer"
                  >
                    YT
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/chris-chapman-a1b4a6133"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LI
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="Scroll Down Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
