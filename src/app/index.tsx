/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useCallback } from 'react';
// import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
// import TitleBar from 'frameless-titlebar';

// import { GlobalStyle } from 'styles/global-styles';

import { Main } from './containers/Main/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';

import { useWindowEvent } from 'utils/window-events';

export function App() {
  const mountNode = document.getElementById('root') as HTMLElement;
  const globalMouseMoveCallback = useCallback(
    event => {
      if (event.target === mountNode) {
        (window as any).api.toggleMouseIgnore(true);
      } else {
        (window as any).api.toggleMouseIgnore(false);
      }
    },
    [mountNode],
  );
  useWindowEvent('mousemove', globalMouseMoveCallback);
  return (
    <BrowserRouter>
      {/* <Helmet titleTemplate="Desktoys" defaultTitle="Cadmus">
        <meta name="description" content="A Deliberate application." />
      </Helmet> */}
      {/* <TitleBar
        icon={<img alt="icon" src={icon} style={{ height: '100%' }} />} // app icon
        // currentWindow={currentWindow} // electron window instance
        // menu={menu}
        platform="win32" // win32, darwin, linux
        title="Desktoys"
        onClose={() => (window as any).api.closeWindow()}
        disableMaximize={true}
        disableMinimize={true}
      /> */}
      <Switch>
        <Route exact path="/" component={Main} />
        <Route component={NotFoundPage} />
      </Switch>
      {/* <GlobalStyle /> */}
    </BrowserRouter>
  );
}
