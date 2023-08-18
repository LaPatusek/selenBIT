import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Pages/Main';
import Cennik from './Pages/cennik';
import Kontakt from './Pages/kontakt';
import Onas from './Pages/onas';
import Szkolenia from './Pages/szkolenia';

const App = () => {
  return (
    <Fragment>
      <header>
        <Header />
      </header>

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
