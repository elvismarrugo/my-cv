import React from 'react';

const SoftSkills = (props) => {
  const mySoftSkills = (
    <div>
      {props.softskills.map((skll) => (
        <div className='item w33' key={skll.name}>
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
      <h2>HABILIDADES BLANDAS</h2>
      {mySoftSkills}
    </div>
  );
};

export default SoftSkills;
