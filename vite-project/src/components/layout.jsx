import React from 'react';
import MiniDrawer from './dashboard';


const Layout = (props) => {
  const { children } = props

  return (

      <div >
     <MiniDrawer/>
        {children}

      </div>
 

  );
};

export default Layout;