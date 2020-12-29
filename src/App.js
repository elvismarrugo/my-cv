import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import HardSkills from './components/HardSkills';
import SoftSkills from './components/SoftSkills';

class App extends Component {
  render() {

    const person = {
      avatar:
        'https://s.gravatar.com/avatar/3dad072061f9be6f904e0d84aaf06ce2?s=80',
      name: 'Elvis Marrugo',
      profession: 'FrontEnd Developer',
      email: 'elvismarrugo@gmail',
      celular: '+57 (317) 658-9172',
      bio:
        'Developer Web | Contador Público | Especialista en Impuestos. Con mucha experiencia en automatizar procesos administrativos, contables y tributarios a través de Macros en Excel VBA.',
      address: 'Cartagena, Colombia.',
      social: [
        { name: 'linkedin', url: 'https://www.linkedin.com/in/elvismarrugo/' },
        { name: 'github', url: 'https://github.com/elvismarrugo' },
        { name: 'twitter', url: 'https://twitter.com/MrElvix' },
      ],
      experience: [
        {
          jobTitle: 'Propietario',
          company: 'Eyexoft',
          website: 'https://www.eyexoft.com/',
          startDate: 'Febrero 2002',
          endDate: 'Presente',
          jobDescription:
            'Soluciones informáticas que simplifican el complejo mundo de los datos con Macros en Excel VBA',
        },
        {
          jobTitle: 'Director de Contabilidad',
          company: 'Inversiones y Cobranzas Todo Hogar ICTH SAS',
          startDate: 'Octubre 2014',
          endDate: 'Presente',
          jobDescription:
            'Coordinador área de sistemas para desarrollo e implementación de software de negocio y contable.',
        },
        {
          jobTitle: 'Profesor Universitario',
          company: 'Corporacion Universitaria Rafael Nuñez',
          startDate: 'Agosto 2008',
          endDate: 'Mayo 2015',
          jobDescription:
            'Docente Investigador de las áreas de impuestos y Excel en los Negocios',
        },
      ],
      certificate: [
        {
          website: 'https://art-hispano.web.app/',
          name: 'Art-Hispano',
          institution: 'Platzi',
          date: 'Noviembre 2020',
          description:
            'Sitio web que acerca a los artesanos con clientes interesados en artesanias | Mi trabajo consistió en realizar toda la configuración del codigo utilizando las siguientes tecnologias:  React.js, Redux, Next.js, Sass y Eslint, creacion y conexión base de datos en Firebase, darle conectividad al registro e inicio de sesion con redes sociales y por último hacer el despliegue de la aplicación con Firebase.',
        },
      ],
      hardskills: [
        { name: 'REACT.JS', percentage: '95%' },
        { name: 'REDUX', percentage: '90%' },
        { name: 'NEXT.JS', percentage: '90%' },
        { name: 'SASS', percentage: '90%' },
        { name: 'FIREBASE', percentage: '90%' },
        { name: 'SQL SERVER', percentage: '90%' },
      ],
      softskills: [
        { name: 'ASERTIVIDAD', percentage: '100%' },
        { name: 'CREATIVIDAD', percentage: '100%' },
        { name: 'PERSEVERANCIA', percentage: '100%' },
        { name: 'PROACTIVIDAD', percentage: '100%' },
        { name: 'RESOLUCIÓN PROBLEMAS', percentage: '100%' },
        { name: 'TRABAJO EN EQUIPO', percentage: '100%' },
      ],
      education: [
        {
          degree: 'Frontend Developer',
          institution: 'Platzi Master',
          startDate: 'Julio 2020',
          endDate: 'Presente',
          description:
            'Programa personalizado que prepara durante 3 años a los mejores estudiantes de Platzi.',
        },
        {
          degree: 'Desarrollador Software',
          institution: 'Platzi',
          startDate: 'Enero 2018',
          endDate: 'Junio 2020',
          description: 'Plataforma online de educacion en tecnología.',
        },
        {
          degree: 'Gestión Regional Investigación e Innovación',
          institution: 'Universidad Tecnológica de Bolivar',
          startDate: 'Agosto 2010',
          endDate: 'Diciembre 2010',
        },
        {
          degree: 'Pedagogía Básica',
          institution: 'Servicio Nacional de Aprendizaje – SENA',
          startDate: 'Agosto 2007',
          endDate: 'Diciembre 2007',
        },
        {
          degree: 'Especialización en Gerencia de Impuestos',
          institution: 'Universidad Externado de Colombia',
          startDate: 'Agosto 2003',
          endDate: 'Diciembre 2004',
        },
        {
          degree: 'Contador Público',
          institution: 'Universidad de Cartagena',
          startDate: 'Febrero 1993',
          endDate: 'Diciembre 1997',
        },
        {
          degree: 'Analista Programador de Computadores',
          institution: 'Centro Latinoamericano de Capacitación - Celdecap',
          startDate: 'Agosto 1989',
          endDate: 'Diciembre 1990',
        },
      ],
    };

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              email={person.email}
              celular={person.celular}
              bio={person.bio}
              address={person.address}
              social={person.social}
            />
          </div>

          <div className='content-wrapper'>
            <div className='content'>
              <Experience experience={person.experience} />
              <Education education={person.education} />
              <Certificate certificate={person.certificate} />
              <HardSkills hardskills={person.hardskills} />
              <SoftSkills softskills={person.softskills} />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default App;
