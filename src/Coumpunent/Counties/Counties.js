import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Counties.css'



const Counties = () => {
    const [Counties, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data=>setCountries(data));
        console.log(Counties)
    }, [])
    return (
        <div>
            <h1>Hello from countries :- {Counties.length}</h1>
           <div className='counties-container'>
           {
                Counties.map(country=> <Country country={country} key={country.cca3}></Country>)
            }
            {/* {
              Counties.map(country=>(<Country country={country} name={country.name.common} population={country.population}  area={country.area}image={country.flags.svg}></Country>))
              
            } */}   
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