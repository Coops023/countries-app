
import './App.css';
import React, {useState, useEffect, createContext } from 'react';

export const ThemeContext = createContext(null)


function App() {
  const [countries, setCountries] = useState([])
  const [theme, setTheme] = useState("")

  const toggleTheme = () =>{

    setTheme((currentTheme)=> (currentTheme === "light" ? "dark" : "light"))
  }

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
   .then(response => response.json())
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

      <div>
      {countries.map((post) => {
         return (
            <div className="post-card" key={post.key}>
              <h2>{post.name.common}</h2>
            </div>
         );
      })}
      </div>
    </div>
  );
}

export default App;
