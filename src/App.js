import React from 'react';
import logo from './logo.svg';
import './styles/styles.scss';
import Curso from './Curso.jsx';

const cursos = [
  {
    'title': 'React Desde Cero',
    'image': 'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png',
    'price': 20,
    'teacher': 'Beto Quiroga' 
  }, 
  {
    'title': 'React - Rutas, APIs & Hooks',
    'image': 'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20Rutas%20peticiones%20hooks.png',
    'price': 35,
    'teacher': 'Beto Quiroga'
  },
  {
    'title': 'React - Manejo del estado de la aplicación',
    'image': 'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20Rutas%20manejo%20de%20estados%20%281%29.png',
    'price': 55,
    'teacher': 'Beto Quiroga'
  },
  {
    'title': 'Android con Kotlin',
    'image': 'https://drupal.ed.team/sites/default/files/styles/medium/public/imagenes-cdn-edteam/2019-01/Android%20Kotlin.png',
    'price': 80,
    'teacher': 'José Dimas Luján'
  },
  {
    'title': 'Infraestructura de Redes',
    'image': 'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-03/Redes%20Infraestructura.png',
    'price': 25,
    'teacher': 'Paula Leon'
  },
  {
    'title': 'Enrutamiento de Redes',
    'image': 'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-03/Redes%20Enrutammiento.png',
    'price': 50,
    'teacher': 'Paula Leon'
  },
  {
    'title': 'Android con Webservices',
    'image': 'https://drupal.ed.team/sites/default/files/styles/medium/public/imagenes-cdn-edteam/2019-01/Android%20Webservice.png?',
    'price': 105,
    'teacher': 'José Dimas Luján'
  },
  {
    'title': 'Android Material Design',
    'image': 'https://drupal.ed.team/sites/default/files/styles/medium/public/imagenes-cdn-edteam/2019-01/Android%20Material%20Design.png',
    'price': 60,
    'teacher': 'José Dimas Luján'
  },
  {
    'title': 'Dart Desde Cero',
    'image': 'https://drupal.ed.team/sites/default/files/styles/medium/public/imagenes-cdn-edteam/2018-12/Dart.png',
    'price': 90,
    'teacher': 'Hansy Schmitt'
  }
];

function App() {
  return (
    <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6 ">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src='http://www.hdfondos.eu/pictures/2013/1029/2/city-highway-in-long-exposure-pics-14160.jpg' alt='imagen'></img>
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Cusos Disponibles</p>
            <p>Nunca dejes de aprender</p>
          </div>
        </div>
      </div>
    </div>

    <div className="ed-grid m-grid-3">
      {
        cursos.map(c => <Curso title={c.title} image={c.image} price={c.price} teacher={c.teacher}/>)
      }
    </div>
    </>
  );
}

export default App;
