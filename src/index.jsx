import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import images from './assets/images.json'

const Img = ({src, alt='test'}) => {
  console.log(alt);
  return (
    <div>
      <img width='150px' src={src} alt={alt} />
    </div>
  );
};
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Img src={images[0]} />);

