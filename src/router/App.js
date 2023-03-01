import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Experiences from '../pages/Experiences/Experiences';
import Portfolio from '../pages/Portfolio/Portfolio';
import Contact from '../pages/Contact/Contact';
import NotFound from '../pages/404/404';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/experiences' element={ <Experiences /> } />
      <Route path='/portfolio' element={ <Portfolio /> } />
      <Route path='/contact' element={ <Contact /> } />

      <Route path='*' element={ <NotFound /> } />
    </Routes>
  );
}