import React from 'react'; 

const Step = props => { 


    return (
        <div className='step'>
            <form>
            <input type="number" min="1" value={props.stepValue} onChange={props.updateStepTyping}></input>
            <br></br>
          
            </form>
        </div>
    );
}

export default Step; 