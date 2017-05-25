import * as React from 'react';
import NavBar from '../components/NavBar';

const Layout = ({ children }: any) => (
  <div>
    <NavBar />
    <div className='container'>
      {children}
    </div>
  </div>
);

export default Layout;
