import { useState, useEffect } from "react"
import { Display } from "./Components/Display"
import axios from 'axios'

const App = () => {
  const [countries,setCountries] = useState([])
  const [value,setValue] = useState('')
  useEffect(()=>{
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all').then(response=>{
      console.log(response.data)
      setCountries(response.data)
    })
  },[])
  console.log(countries,'yeah')
  const filteredCountries = countries.filter(country=>country.name.common.slice(0,value.length).toLowerCase()===value.toLowerCase())
  return(
    <div>
      find countries
      <input value={value} onChange={(event)=>setValue(event.target.value)}/>
      <Display countries={filteredCountries}/>
    </div>
  )
}

export default App