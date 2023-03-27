import React from 'react';

const Country = (props) => {
    return (
        <div className='contryDetalies'>
            <h1>Hello secound Country</h1>
             <h1>Name:- {props.name}</h1>
             <h1>Population{props.population}</h1>
             <img src={props.image} alt="" />
        </div>
    );
};

export default Country;