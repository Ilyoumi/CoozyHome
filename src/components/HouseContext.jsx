import React, {useState, useContext, createContext, useEffect} from 'react';
import {housesData} from '../data'

export const HouseContext = createContext()
const HouseContextProvider = ({children}) => {
  const[houses, setHouses] = useState(housesData)
  const[country, setCountry] = useState('Location (any)')
  const[countries, seCountries] = useState([])
  const[property, setProperty] = useState('Property (any)')
  const[properties, setProperties] = useState([])
  const[price, setPrice] = useState('Price range ( any )')
  const[loading, setLoading] = useState(false)

  useEffect(()=> {
    const allCountries = houses.map((house) => {
      return house.country
    })
  const uniqueCountries = ['Location (any)', ... new Set(allCountries)]
  seCountries(uniqueCountries)
  }, [])

  useEffect(()=> {
    const allProperties = houses.map((house) => {
      return house.type
    })
  const uniqueProperties = ['Location (any)', ... new Set(allProperties)]
  setProperties(uniqueProperties)
  }, [])

  const handleClick = () => {
    console.log('clicked')
  }
  return (
    <HouseContext.Provider value={
      {houses, setHouses,
      country, setCountry,
      countries, seCountries,
      property,setProperty,
      properties,setProperties,
      price,setPrice,
      loading,setLoading,
      handleClick}
    }>
      {children}
    </HouseContext.Provider>
  )
};

export default HouseContextProvider;
