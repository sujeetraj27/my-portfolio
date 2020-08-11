import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import  Home  from './components';
import Resume from './components/Resume';
import Work from './components/work';
import Contact from './components/contact';



function App() {
  
  
  return (
  <>
  <Route exact path="/" component={Home} />
  <Route path="/resume" component={Resume} />
  <Route path="/work" component={Work} />
  <Route path="/contact" component={Contact} />

  </>
  );
}

export default App;

