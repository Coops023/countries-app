
import './App.css';
import React, {useState, useEffect, createContext } from 'react';
import Card from './Components/Card';
import Search from './Components/Search';

export const ThemeContext = createContext(null)


function App() {
  const [countries, setCountries] = useState([])  

  const [theme, setTheme] = useState("light")

  const toggleTheme = () =>{

    setTheme((currentTheme)=> (currentTheme === "light" ? "dark" : "light"))
  }

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
   .then(response => 
    response.json())
   .then(data => 
        {
          console.log("these are a list of countries",data)
          setCountries(data)
        }
      );
}, []);

  return (
    <div className="App" id={theme}>
      <button onClick={toggleTheme}>Change theme</button>
      <Search countriesList={countries} ></Search>

      {countries.map((post, i) => {
         return (
            <Card className="post-card" key={i} countryData={post}>
              
            </Card>
         );
      })}
      </div>
   
  );
}

export default App;
