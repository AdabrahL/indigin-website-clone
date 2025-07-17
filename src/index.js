import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Founder from './components/Founder';
import Story from './components/Story';
import ValuesSection from './components/Values';
import Footer from './components/Footer';
import Subsidiaries from './components/Subsidiary ';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Home/>
  <About/>
  <Subsidiaries/>
<Founder/>
<Story/>
<ValuesSection/>
<Footer/>

  
  </React.StrictMode>
);
