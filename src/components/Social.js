import React from 'react';
import PropTypes from 'prop-types';

const Social = ({ social }) => {
  const socialNetworks = (
    <ul>
      {social.map((socialNetwork, index) => (
        <li key={`${socialNetwork.name}-${index}`}>
          <a href={socialNetwork.url} target='_blank' rel='noopener noreferrer'>
            <i className={'fa fa-' + socialNetwork.name + '-square'}></i>
          </a>
        </li>
      ))}
    </ul>
  );
  return <div className='social'>{socialNetworks}</div>;
};

Social.propTypes = {
  social: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Social;
