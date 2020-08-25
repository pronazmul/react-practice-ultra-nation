import React, { useState, useEffect } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Country from './components/Country/Country';



function App() {
  const [countries,setCountries] = useState([])

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=> setCountries(data))
    .catch(error=> console.log(error))
  },[])

const [pickedCoun, setPickedCoun] = useState([])
const addedCountries = (country)=>{
        const newPicked = [...pickedCoun, country]
        setPickedCoun(newPicked)
}
const totalPopulation = pickedCoun.reduce((initial, country)=> initial+country.population,0)


  return (   
          <div className='container'>
                <div className="jumbotron text-center">
                <h1 className='display-3'>Total Countries : {countries.length}</h1>
                <h4 className='m-0 mb-2'>Selected Countries: {pickedCoun.length}</h4>
                <h4 className='m-0'>Added Population: {totalPopulation}</h4>
                </div>
               {countries.map(conutry=><Country addedCountries={addedCountries} key={conutry.alpha3Code} country={conutry}></Country>)}
          </div>
   )
}

export default App;
