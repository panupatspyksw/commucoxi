import { Routes, Route, useLocation } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Appreciation from '../pages/Appreciation';
import { AnimatePresence } from 'framer-motion';
import ProjectOrganization from '../pages/ProjectOrganization';
import Page404 from '../pages/Page404';
import ProjectPersonal from '../pages/ProjectPersonal';
import ProjectUniversity from '../pages/ProjectUniversity';
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
          path='/pt/organization'
          element={<ProjectOrganization />}
        ></Route>
        <Route exact path='/pt/personal' element={<ProjectPersonal />}></Route>
        <Route
          exact
          path='/pt/university'
          element={<ProjectUniversity />}
        ></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
        <Route exact path='/appreciation' element={<Appreciation />}></Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
