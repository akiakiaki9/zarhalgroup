import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contacts from './pages/Contacts';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Стили
import './styles/styles.css';
import './styles/shapka.css';
import './styles/navbar.css';
import './styles/header.css';
import './styles/section.css';
import './styles/section2.css';
import './styles/section3.css';
import './styles/section4.css';
import './styles/section5.css';
import './styles/section6.css';
import './styles/contacts.css';
import './styles/contacts2.css';
import './styles/pagename.css';
import './styles/footer.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;