import React from 'react';
import ReactDOM from 'react-dom';
import MainSite from './sites/MainSite/MainSite';
import CountrySite from './sites/CountrySite/CountrySite';
import { store, persistor } from './reducers'
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <PersistGate loading={null} persistor={persistor}>
        <Navbar />
        <Switch>
          <Route exact path='/' component={MainSite} />
          <Route path='/:countryName' component={CountrySite} />
        </Switch>
        <Footer />
         </PersistGate>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
