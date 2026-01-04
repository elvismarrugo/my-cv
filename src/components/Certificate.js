import React from 'react';
import PropTypes from 'prop-types';

const Certificate = ({ certificate }) => {
  const myCertificates = (
    <div>
      {certificate.map((cert, index) => (
        <div className='item' key={`${cert.name}-${index}`}>
          <h3>
            <a href={cert.website}>{cert.name}</a> @ {cert.institution}{' '}
            <span>{cert.date}</span>
          </h3>
          {cert.description && <p>{cert.description}</p>}
        </div>
      ))}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-trophy'></i>
      <h2>PROYECTOS</h2>
      {myCertificates}
    </div>
  );
};

Certificate.propTypes = {
  certificate: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      institution: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default Certificate;
