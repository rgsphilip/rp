import React from 'react';

// Import typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';

import githubIcon from './github.png';
import linkedinIcon from './linkedin.png';
import twitterIcon from './twitter.png';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div>
        <p
          style={{
            marginBottom: rhythm(2.5),
          }}
        >
          I'm a software developer living and working in Portland, Oregon.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <a href='https://github.com/rgsphilip'>
            <img
              src={githubIcon}
              style={{
                width: rhythm(2),
                height: rhythm(2),
              }}
            />
          </a>
          <a href='https://www.linkedin.com/in/rgsphilip/'>
            <img
              src={linkedinIcon}
              style={{
                width: rhythm(2),
                height: rhythm(2),
              }}
            />
          </a>
          <a href='https://twitter.com/rgsphilip'>
            <img
              src={twitterIcon}
              style={{
                width: rhythm(2),
                height: rhythm(2),
              }}
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Bio;
