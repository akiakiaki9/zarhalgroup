import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import Store from './pages/store/Store';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
import './styles/login.css';
import './styles/videobg.css';
import './styles/store.css';
import './styles/detail.css';
import './styles/layout.css';
import './styles/similar.css';
import DetailMain from './pages/store/detail/detailmain';

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
          <Route path="/login" element={<Login />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/product/:id" element={<DetailMain />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;