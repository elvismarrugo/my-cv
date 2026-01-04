import React from 'react';
import PropTypes from 'prop-types';

const SoftSkills = ({ softskills }) => {
  const mySoftSkills = (
    <div>
      {softskills.map((skll, index) => (
        <div className='item w33' key={`${skll.name}-${index}`}>
          <h3>{skll.name}</h3>
          <div className='skills'>
            <span style={{ width: skll.percentage }}></span>
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-users'></i>
      <h2>HABILIDADES BLANDAS</h2>
      {mySoftSkills}
    </div>
  );
};

SoftSkills.propTypes = {
  softskills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SoftSkills;
