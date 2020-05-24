//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//include bootstrap npm library into the bundle
import 'bootstrap';

import './icons.js';

//include your index.scss file into the bundle
import '../styles/index.scss';


function SimpleCounter(props){
    return (<div className="bigCounter">
        <div className="calendar">
            <i className="far fa-clock"></i>
        </div>
        <div className="four">{props.digitFour % 10}</div>
        <div className="three">{props.digitThree % 10}</div>
        <div className="two">{props.digitTwo % 10}</div>
        <div className="one">{props.digitOne % 10}</div>
    </div>);
}
SimpleCounter.propTypes = {
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number
};

let counter = 0;
setInterval(function(){
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    console.log(four, three, two, one);
    //render your react application
    counter++;
    ReactDOM.render(
        <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four}  />,
        document.querySelector('#app')
    );
},1000);