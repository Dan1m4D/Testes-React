import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Container from './components/layout/Container';

import Home from './components/pages/Home'
import Contacts from './components/pages/Contacts'
import Company from './components/pages/Company'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Projects from './components/pages/Projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass = "min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/contacts" element={<Contacts />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
