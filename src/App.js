import './App.css';
import './css/style.css';
import './css/burger.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import Button from './shared/Button';
// import Mirror from './shared/Mirror';
import Header from './components/Header';
import { AnimatePresence } from 'framer-motion';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    // <div id='app'>
    //   <Header />
    // </div>
    <AnimatePresence exitBeforeEnter>
      <Router>
        {/* <ScrollToTop /> */}

        <div className='gap-header'></div>
        <AnimatedRoutes />
        <Header />
      </Router>
    </AnimatePresence>
  );
}

export default App;
