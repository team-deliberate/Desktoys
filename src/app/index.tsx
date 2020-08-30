/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import TitleBar from 'frameless-titlebar';

// import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import icon from '../images/logo/icon.png';

export function App() {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="Desktoys" defaultTitle="Desktoys">
        <meta name="description" content="A Deliberate application." />
      </Helmet>
      <TitleBar
        icon={<img alt="icon" src={icon} style={{ height: '100%' }} />} // app icon
        // currentWindow={currentWindow} // electron window instance
        platform="win32" // win32, darwin, linux
        // menu={menu}
        title="Desktoys"
        // onClose={() => currentWindow.close()}
        // onMinimize={() => currentWindow.minimize()}
        // onMaximize={() => currentWindow.maximize()}
        // // when the titlebar is double clicked
        // onDoubleClick={() => currentWindow.maximize()}
      />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      {/* <GlobalStyle /> */}
    </BrowserRouter>
  );
}
