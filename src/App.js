import './App.css';

function App() {
  return (
    <div className="App">
    <ArNahid name="atik" varsity="oulu"></ArNahid>
    <Cinema name="kutub mainar" category="ancient masjid"></Cinema>
    </div>
  );
}

function ArNahid(props){
  return (
    <div style={{color: 'red', forntWeight: 'bold', fontSize: '44px', backgroundColor: 'lightblue', borderRadius: '5px'}}>
      <p>Atikur Rahman</p>
      <p>LUT Univarsity and {props.varsity}</p>
      <h1>{props.name}</h1>
      <p>MERN DEVELOPER</p>
    </div>
  );
}

function Cinema(props) {
  return (
    <h1>{props.name} {props.category}</h1> 
  );
}

export default App;
