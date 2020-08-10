import React from 'react'; // staly element komponentu reactowego

const Heading = props => { // konwencja: nazwa komponentu odpowiada nazwie pliku (Heading)
return (<h1 className={props.classValue}>{props.text}</h1>);
}

export default Heading; // staly element komponentu reactowego