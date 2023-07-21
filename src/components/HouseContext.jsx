import React, {useState, useContext, createContext} from 'react';
import {housesData} from '../data'

export const HouseContext = createContext()
const HouseContextProvider = ({children}) => {
  const[houses, setHouses] = useState(housesData)
  const[country, setCountry] = useState('Location (any)')
  const[countries, seCountries] = useState([])
  const[propery, setProperty] = useState('Propery (any)')
  const[properties, setProperties] = useState([])
  const[price, setPrice] = useState('Price range ( any )')
  const[loading, setLoading] = useState(false)

  return (
    <HouseContext.Provider value={
      {houses, setHouses,
      country, setCountry,
      countries, seCountries,
      propery,setProperty,
      properties,setProperties,
      price,setPrice,
      loading,setLoading}
    }>
      {children}
    </HouseContext.Provider>
  )
};

export default HouseContextProvider;
