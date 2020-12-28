import React from 'react';
import PropTypes from 'prop-types';
import Social from './Social';

const About = ({
  avatar,
  name,
  profession,
  email,
  celular,
  bio,
  address,
  social,
}) => {
  return (
    <div className='bio'>
      <div className='avatar'>
        <img src={avatar} alt={name} />
      </div>
      <div className='title'>
        <h1>{name}</h1>
        <h2>{profession}</h2>
        <h3>{email}</h3>
        <h3>{celular}</h3>
      </div>
      <div className='desc'>
        <p>{bio}</p>
      </div>
      <div className='address'>
        <p>{address}</p>
      </div>
      <Social social={social} />
    </div>
  );
};

// eslint-disable-next-line react/no-typos
About.PropTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  address: PropTypes.string,
  social: PropTypes.node,
};

export default About;
