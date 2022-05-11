import './App.css';
import './css/style.css';
import './css/burger.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import Button from './shared/Button';
// import Mirror from './shared/Mirror';
import Header from './components/Header';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <Router>
      <Header />
      <div className='gap-header'></div>
      <AnimatedRoutes />
    </Router>
    // <AnimatePresence exitBeforeEnter>

    // </AnimatePresence>
  );
}

export default App;
