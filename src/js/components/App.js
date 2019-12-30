import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { ScrollToTop } from '../helpers/customHooks';
import Colors from './Colors/Colors';
import Type from './Type/Type';
import Export from './Export/Export';
import Info from './Export/Info';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <div className="min-h-full flex flex-col">
      <HashRouter>
        <ScrollToTop />
        <div className="container flex-grow">
          <Route exact path="/" render={() => <Colors />}></Route>
          <Route exact path="/typography" render={() => <Type />}></Route>
          <Route exact path="/export" render={() => <Export />}></Route>
          <Route exact path="/info" render={() => <Info />}></Route>
        </div>
      </HashRouter>
      <Footer />
    </div>
  );
};

export default App;
