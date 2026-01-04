import React from 'react';
import PropTypes from 'prop-types';

const HardSkills = ({ hardskills }) => {
  const myHardSkills = (
    <div>
      {hardskills.map((skll, index) => (
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
      <i className='fa fa-code'></i>
      <h2>HABILIDADES TÉCNICAS</h2>
      {myHardSkills}
    </div>
  );
};

HardSkills.propTypes = {
  hardskills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HardSkills;
