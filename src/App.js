import React from 'react';
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
