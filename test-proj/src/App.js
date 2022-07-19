import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar'
//import './App.css';
import Contacto from './pages/Contacto';
import Empresa from './pages/Empresa';
import Home from './pages/Home';

function App() {  
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </Router>
    );
}

export default App;
