// Import React into the bundle
import React from 'react';
import ReactDOM from 'react-dom/client';
// Include bootstrap npm library into the bundle
import 'bootstrap';
import './icons.js';
import SimpleCounter from "./component/simpleCounter.jsx"

// Include your index.scss file into the bundle
import '../styles/index.scss';


let counter = 0;
const root = ReactDOM.createRoot(document.getElementById('app'));

setInterval(() => {
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100);
    const two = Math.floor(counter / 10);
    const one = Math.floor(counter / 1);
    counter++;
    
    root.render(
        <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />
    );
}, 1000);
