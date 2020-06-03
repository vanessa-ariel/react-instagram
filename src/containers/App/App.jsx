import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Topbar from '../../components/Topbar';
import Stories from '../../containers/Stories';
import User from '../UserProfile/UserProfile'

import Routes from '../../routes';

import './App.scss';

const App = () => (
  <div>
    <Topbar />
    <Stories showStory={false}/>
    <User />
  </div>
);

export default App;
