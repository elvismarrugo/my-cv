import React from 'react';
import PropTypes from 'prop-types';

const Experience = ({ experience }) => {
  const myExperience = (
    <div>
      {experience.map((exp, index) => (
        <div className='item' key={`${exp.jobTitle}-${index}`}>
          <h3>
            {exp.jobTitle} @ {exp.website ? (
              <a href={exp.website}> {exp.company}</a>
            ) : (
              <span> {exp.company}</span>
            )}{' '}
            <span>
              {exp.startDate} - {exp.endDate}
            </span>
          </h3>
          <p>{exp.jobDescription}</p>
          {exp.jobDescription1 && <p>{exp.jobDescription1}</p>}
          {exp.jobDescription2 && <p>{exp.jobDescription2}</p>}
        </div>
      ))}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-briefcase'></i>
      <h2>EXPERIENCIA</h2>
      {myExperience}
    </div>
  );
};

Experience.propTypes = {
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      jobTitle: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      website: PropTypes.string,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      jobDescription: PropTypes.string,
      jobDescription1: PropTypes.string,
      jobDescription2: PropTypes.string,
    })
  ).isRequired,
};

export default Experience;
