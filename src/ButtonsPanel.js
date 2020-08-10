import React from 'react'; 
import './ButtonsPanel.css';

const ButtonsPanel = props => { 

    console.log(props);
    return (
        <div className='buttons-panel'>

            <button onClick={props.changeValueWithStep}>Zwiększ o {props.stepValue}</button>
            <button onClick={()=>props.resetValue(true)}>ReInit</button>
            <button onClick={()=>props.resetValue(false)}>Reset</button>
        </div>
    );
}

export default ButtonsPanel; 

