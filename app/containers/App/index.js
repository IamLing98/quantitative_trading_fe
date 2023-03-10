import React, {useEffect, useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../Pages/Standalone/NotFoundDedicated';
import Auth from './Auth';
import Application from './Application';
import LandingCorporate from './Landing';
import ThemeWrapper from './ThemeWrapper';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

import axios from 'axios'

function App() { 
  
  return (
    <ThemeWrapper>
      <Switch>
        {/* <Route path="/" exact component={LandingCorporate} /> */}
        <Route path="/app" component={Application} />
        <Route path="/" component={Application} />
        <Route component={Auth} />
        <Route component={NotFound} />
      </Switch>
    </ThemeWrapper>
  );
}

export default App;
