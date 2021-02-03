import React from 'react';

const Experience = (props) => {
  const myExperience = (
    <div>
      {props.experience.map((exp) => (
        <div className='item' key={exp.jobTitle}>
          <h3>
            {exp.jobTitle} @ <a href={exp.website}> {exp.company}</a>{' '}
            <span>
              {exp.startDate} - {exp.endDate}
            </span>
          </h3>
          <p>{exp.jobDescription}</p>
          <p>{exp.jobDescription1}</p>
          <p>{exp.jobDescription2}</p>
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

export default Experience;
