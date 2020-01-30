import React from 'react';
import HeaderNav from './containers/HeaderNav/HeaderNav'
import { SideBar } from './containers/SideBar/SideBar';
import { Home } from './components/Home/Home';

const App = () => {
  return (
    <React.Fragment>
<HeaderNav/>
<SideBar/>
<Home/>
    </React.Fragment>
  );
}

export default App;
