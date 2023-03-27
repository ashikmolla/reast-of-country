import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';



const Counties = () => {
    const [Counties, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data=>setCountries(data));
    }, [])
    return (
        <div>
            <h1>Hello from countries :- {Counties.length}</h1>
            
           <div>
            {
              Counties.map(country=>(<Country name={country.name.common} population={country.population} image={country.flags.png}></Country>))
              
            }
           </div>
        </div>
    )
};


// function Country(props){
//     return(
//         <div className='contryDetalies'>
//             <h1>Name:- {props.name}</h1>
//             <h4>Population:-{props.population}</h4>
//             <img src={props.image} alt="" />
//         </div>
//     )
// }





export default Counties;