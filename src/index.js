import React from 'react';
import ReactDOM from 'react-dom';
import MainSite from './sites/MainSite/MainSite';
import CountrySite from './sites/CountrySite/CountrySite';
import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
