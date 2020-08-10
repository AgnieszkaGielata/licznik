import React from 'react'; 
import './CounterDisplay.css';

const counterDisplay = props => { 
    return (<p>Stan licznika: {props.counterCurrentValue}</p>);
}

export default counterDisplay; 