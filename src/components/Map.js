import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImg from '../images/mymap.png';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 30%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .container {
      width: 50%;
      height: 50%;
    }
    .map__card {
      max-width: none;
      right: auto;
      background: var(--dark-bg);
    }
    .map__card__heading {
      font-size: 18px;
    }
    .map__card__link {
      font-size: 10px;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>Port Melbourne, Melbourne, Australia</PText>
          <a
            href="https://goo.gl/maps/5LZ9BE1m7tEuETXC9"
            target="_blank"
            rel="noreferrer"
            className="map__card__link"
          >
            Open in google map
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
