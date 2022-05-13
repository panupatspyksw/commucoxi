import { Routes, Route, useLocation } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Appreciation from '../pages/Appreciation';
import { AnimatePresence } from 'framer-motion';
import ProjectOrganization from '../pages/ProjectOrganization';
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/projects' element={<Projects />}></Route>
        <Route
          exact
          path='/projects/t/organization'
          element={<ProjectOrganization />}
        ></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
        <Route exact path='/appreciation' element={<Appreciation />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
