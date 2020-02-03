import React from 'react';
import HeaderNav from './containers/HeaderNav/HeaderNav'
import { SideBar } from './containers/SideBar/SideBar';
import { Home } from './components/Home/Home';
import { AppLayout } from './components/AppLayout/AppLayout';

const App = () => {
  return (
    <AppLayout>
      <Home />
    </AppLayout>
  );
}

export default App;
