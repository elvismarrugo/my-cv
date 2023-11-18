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
      profession: 'Power BI Developer',
      email: 'elvismarrugo@gmail.com',
      celular: '+57 (317) 658-9172',
      bio:
        'Power BI Developer | Web Developer | Contador Público | Especialista en Impuestos. Amplia experiencia en automatizar procesos administrativos, contables y tributarios a través de Macros en Excel VBA.',
      address: 'Cartagena, Colombia.',
      social: [
        { name: 'linkedin', url: 'https://www.linkedin.com/in/elvismarrugo/' },
        { name: 'github', url: 'https://github.com/elvismarrugo' },
        { name: 'twitter', url: 'https://twitter.com/MrElvix' },
      ],
      experience: [
        {
          jobTitle: 'CEO',
          company: 'Visual BI',
          website: 'https://www.somosvisualbi.com/',
          startDate: 'Febrero 2002',
          endDate: 'Presente',
          jobDescription:
            'Soluciones informáticas que simplifican el complejo mundo de los datos con Macros en Excel VBA • Automatización cálculo de Impuestos Nacionales y Distritales.• Automatización Estados Financieros e Informes a entidades gubernamentales',
          jobDescription1:
            '• Automatización cálculo de Impuestos Nacionales y Distritales.',
          jobDescription2:
            '• Automatización Estados Financieros e Informes a entidades gubernamentales',
        },
        {
          jobTitle: 'Director de Contabilidad',
          company: 'Inversiones y Cobranzas Todo Hogar ICTH SAS',
          startDate: 'Octubre 2014',
          endDate: 'Presente',
          jobDescription:
            'Coordinador área de sistemas para desarrollo e implementación de software de negocio y contable.',
          jobDescription1:
            '• Diseño, creación e implementación de automatización para cálculo de capacidad de endeudamiento.',
          jobDescription2:
            '• Enlace con área de sistemas para desarrollo e implementación de software de negocio y contable',
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
        { name: 'Power BI', percentage: '90%' },
        { name: 'SQL SERVER', percentage: '90%' },
        { name: 'REACT.JS', percentage: '90%' },
        { name: 'REDUX', percentage: '90%' },
        { name: 'NEXT.JS', percentage: '90%' },
        { name: 'SASS', percentage: '90%' },
        { name: 'FIREBASE', percentage: '90%' },
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
          degree: 'Developer Power BI',
          institution: 'DataEDU',
          startDate: 'Julio 2023',
          endDate: 'Presente',
          description:
            'Compañía de consultoría y capacitación en inteligencia de negocios.',
        },
        {
          degree: 'Developer Power BI',
          institution: '4GO Academy',
          startDate: 'Noviembre 2022',
          endDate: 'Julio 2023',
          description:
            'Empresa de Capacitación en Excel y Power BI .',
        },
        {
          degree: 'Developer Power BI',
          institution: 'Acadevor',
          startDate: 'Febrero 2020',
          endDate: 'Presente',
          description:
            'Plataforma de educacion en Power BI y Excel.',
        },
        {
          degree: 'Desarrollador Software',
          institution: 'Platzi Master',
          startDate: 'Julio 2020',
          endDate: 'Marzo 2022',
          description: 'Programa personalizado que prepara durante 3 años a los mejores estudiantes de Platzi.',
        },
        {
          degree: 'Desarrollador Software',
          institution: 'Platzi',
          startDate: 'Enero 2018',
          endDate: 'Presente',
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
              website={person.website}
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
              <Certificate certificate={person.certificate} />
              <HardSkills hardskills={person.hardskills} />
              <SoftSkills softskills={person.softskills} />
              <Education education={person.education} />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default App;
