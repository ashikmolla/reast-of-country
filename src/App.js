
import './App.css';
import Counties from './Coumpunent/Counties/Counties';


function App() {
  return (
    <div className="App">
       <Counties></Counties>

      
    </div>
  );
}


// function LodinCountries(){
//   const [countries,setCountries]=useState([]);

//   useEffect( ()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=>setCountries(data))
//   }, [])
//   return(
//    <div>
//      <h1> visiting Every country Of the world </h1>
//     <h3> Avilable countrise in visiting{countries.length}</h3>
//     {
//       countries.map(country => <Country name={country.name.common} population={country.population} flags={country.flags.png}></Country>)
//     }
//    </div>
//   )
// }

// function Country(props){
//   return(
//     <div className='contryDetalies'>
//       <h2>Name:- {props.name}</h2>
//       <h3>population:-{props.population}</h3>
//       <img src={props.flags} alt="" />
      
//     </div>
//   )
// }


export default App;
