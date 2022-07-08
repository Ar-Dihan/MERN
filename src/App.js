import './App.css';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <Countries/>
      <Header/>
      </div>
  );
}

// function Countries(){
//   const [countries, setCountries] = useState([]);

//   useEffect(() =>{
//     fetch('https://restcountries.com/v2/all')
//     .then(res=> res.json())
//     .then(data=> {
//       console.log("Nahid");
//       setCountries(data)
//     });
//   }, []);
  
//   return(
//     <div>
//       <h2>Traveling around the world</h2>
//       <h4>Countries Available: {countries.length}</h4>
//       {
//         countries.map(country => <Country name={country.name} population= {country.population} key={country.alpha2Code}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div>
//       <h2>Name: {props.name} --- population: {props.population}</h2>
//     </div>
//   )
// }



export default App;
