import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
// import images from './assets/images.json';
// import users from './assets/users.json';
// import { UserCard } from './conponents/UserCard/UserCard';
// import { UserCard2 } from './conponents/UserCard2/UserCard2';
import { Product } from './conponents/Product/Product';


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<UserCard images={images} />);
root.render(
    <React.StrictMode>
        <Product />
       
    </React.StrictMode>,
);