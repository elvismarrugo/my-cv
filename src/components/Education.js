import React from 'react';
import PropTypes from 'prop-types';

const Education = ({ education }) => {
  const myEducation = (
    <div>
      {education.map((edu, index) => (
        <div className='item' key={`${edu.degree}-${index}`}>
          <h3>
            {edu.degree} @ {edu.institution}{' '}
            <span>
              {edu.startDate} - {edu.endDate}
            </span>
          </h3>
          {edu.description && <p>{edu.description}</p>}
        </div>
      ))}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-graduation-cap'></i>
      <h2>EDUCACIÓN</h2>
      {myEducation}
    </div>
  );
};

Education.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      degree: PropTypes.string.isRequired,
      institution: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default Education;
