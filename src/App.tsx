import { Fragment, useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Main from './Pages/Main';
import Cennik from './Pages/cennik';
import Kontakt from './Pages/kontakt';
import Onas from './Pages/onas';
import Szkolenia from './Pages/szkolenia';

declare var process: {
  env: {
    REACT_APP_TRACKING_ID: string;
  };
};

const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;

ReactGA.initialize(TRACKING_ID);

const App = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  ReactGA.send({
    hitType: 'pageview',
    page: window.location.hash,
    title: window.location.hash,
  });

  return (
    <Fragment>
      <nav>
        <Nav />
      </nav>

      <main>
        <Routes>
          <Route path='/main' element={<Main />} />
          <Route path='/szkolenia' element={<Szkolenia />} />
          <Route path='/cennik' element={<Cennik />} />
          <Route path='/o-nas' element={<Onas />} />
          <Route path='/kontakt' element={<Kontakt />} />
          <Route path='*' element={<Main />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default App;
