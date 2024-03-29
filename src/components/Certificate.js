import React from 'react';

const Certificate = (props) => {
  const myCertificates = (
    <div>
      {props.certificate.map((cert) => (
        <div className='item' key={cert.name}>
          <h3>
            <a href={cert.website}>{cert.name}</a>@ {cert.institution}{' '}
            <span>{cert.date}</span>
          </h3>
          <p>{cert.description}</p>
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

export default Certificate;
