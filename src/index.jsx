import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import images from './assets/images.json'

const imgComponent = src => {

  return (
    <div>
      {/*кометнар тут може бутм*/}
      <img width='200px' src={src} alt='' />
    </div>
  );
};
 

console.log(imgComponent);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(imgComponent(images[1]));

