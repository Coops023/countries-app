import React, { useState,useEffect } from 'react'

export default function Search(props) {
    const [searchItem, setSearchItem] = useState('')
    const [filteredCountries, setFilteredCountries] = useState('')
    

    const handleInputChange = (e) => { 
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)
      }
    

    const filteredItems = props.countriesList.filter((country) =>
    country.name.common.toLowerCase().includes(searchItem.toLowerCase())

    );
  
   
 
    
//  useEffect(()=>{
//     props.countriesList.map((country)=>{
//         console.log(country.name.common)
//     })
//  })

 

  return (
    <div>
        
        <input placeholder='Search' value={searchItem} onChange={handleInputChange} ></input>
      <ul>
        {filteredItems.map((country, i) => <h2>{country.name.common}</h2> )}
      </ul>

      
    </div>
  )
}
