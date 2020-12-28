import React from 'react';

const HardSkills = (props) => {
  const myHardSkills = (
    <div>
      {props.hardskills.map((skll) => (
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
      <h2>HABILIDADES TECNICAS</h2>
      {myHardSkills}
    </div>
  );
};

export default HardSkills;
