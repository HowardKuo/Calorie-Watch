import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import GoogleFontLoader from 'react-google-font-loader';
//two fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import "./style.css";

function Nav(props) {
    return <Navbar className="nav justify-content-center" bg="info" variant="dark">
      <GoogleFontLoader
    fonts={[
      {
        font: 'Teko',
        weights: [600, 700],
      },
      {
        font: 'Roboto Mono',
        weights: [400, 700],
      },
    ]}
    subsets={['cyrillic-ext', 'greek']}
  />
    <Navbar.Brand className="title" href="../home">
    <p style={{ fontFamily: 'Teko, sans-serif' }}>Calorie   <FontAwesomeIcon icon={faUtensils} style={{ color: 'white' }} size="sm" />   Counter</p>
    </Navbar.Brand>
  </Navbar>
}

export default Nav;