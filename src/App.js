import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route path='/main'>
            <Main />
          </Route>
          <Route path='/szkolenia'>
            <Szkolenia />
          </Route>
          <Route path='/cennik'>
            <Cennik />
          </Route>
          <Route path='/o-nas'>
            <Onas />
          </Route>
          <Route path='/kontakt'>
            <Kontakt />
          </Route>
          <Route path='*'>
            <Main />
          </Route>
        </Switch>
      </main>

      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default App;
