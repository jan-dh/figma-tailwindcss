import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { ScrollToTop } from '../helpers/customHooks.js';
import Preferences from './Preferences/Preferences.js';
import Colors from './Colors/Colors.js';
import Type from './Type/Type.js';
import Effects from './Effects/Effects.js';
import Export from './Export/Export.js';
import Info from './Export/Info.js';
import Footer from './Footer/Footer.js';

const App = () => {
    return (
        <div className="min-h-full flex flex-col">
            <HashRouter>
                <ScrollToTop />
                <div className="p-4 flex-grow">
                    <Route
                        exact
                        path="/"
                        render={() => <Preferences />}
                    ></Route>
                    <Route
                        exact
                        path="/colors"
                        render={() => <Colors />}
                    ></Route>
                    <Route
                        exact
                        path="/typography"
                        render={() => <Type />}
                    ></Route>
                    <Route
                        exact
                        path="/effects"
                        render={() => <Effects />}
                    ></Route>
                    <Route
                        exact
                        path="/export"
                        render={() => <Export />}
                    ></Route>
                    <Route exact path="/info" render={() => <Info />}></Route>
                </div>
            </HashRouter>
            <Footer />
        </div>
    );
};

export default App;
