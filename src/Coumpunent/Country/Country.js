import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props);
    const { name, population,area,region,flags} = props.country;
    return (
        <div className='country'>
            <h1> Name:-{name.common}</h1>
            <p><small>Population{population} , Area{area}</small></p>
            <p><small>Region:-{region}</small></p>
            <img src={flags.svg} alt="" />

            
        </div>
    );
};

export default Country;