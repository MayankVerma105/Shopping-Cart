
// src/components/Scroll.js

import React from 'react';

const Scrol = (props) => {
  return( 
    <div style={{overflowY: 'scroll', height:'70vh'}}>
      {props.children}
    </div>	
  );
}

export default Scrol;