import React, {useState, createContext, useEffect} from 'react';
import {housesData} from '../data'

export const HouseContext = createContext()
const HouseContextProvider = ({children}) => {
  const[houses, setHouses] = useState(housesData)
  const[country, setCountry] = useState('Location (any)')
  const[countries, setCountries] = useState([])
  const[property, setProperty] = useState('Property (any)')
  const[properties, setProperties] = useState([])
  const[price, setPrice] = useState('Price range ( any )')
  const[loading, setLoading] = useState(false)

  useEffect(()=> {
    const allCountries = houses.map((house) => {
      return house.country
    })
  const uniqueCountries = ['Location (any)', ...new Set(allCountries)]
  setCountries(uniqueCountries)
  }, [])

  useEffect(()=> {
    const allProperties = houses.map((house) => {
      return house.type
    })
  const uniqueProperties = ['Property (any)', ...new Set(allProperties)]
  setProperties(uniqueProperties)
  }, [])

  const handleClick = () => {
    setLoading(true)
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };
  
    // get first value of price and parse it to number
    const minPrice = parseInt(price.split(' ')[0])

    // get max value of price and parse it to number
    const maxPrice = parseInt(price.split(' ')[2])

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      // if all values are selected
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice && housePrice <= maxPrice
      ) {
        return house;
      }

      //if all value are default
      if(isDefault(country) && isDefault(property)  && isDefault(price)){
        return house
      }
      // if country is not default
      if(!isDefault(country) && isDefault(property)  && isDefault(price)){
        return house.country === country
      }
      // if property is not default

      if(!isDefault(property) && isDefault(country) && isDefault(price)){
        return house.type === property
      }
      // if price is not default
      if(!isDefault(price) && isDefault(country) &&isDefault(property)){
        if(housePrice >= minPrice && housePrice <= maxPrice){
          return house
        }
      }

      // if country && property is not default
      if(!isDefault(country) && !isDefault(property) && isDefault(price)){
        return house.country === country &&
        house.type === property 

      }
      // if country && price is not default

      if(!isDefault(country) && !isDefault(price) && isDefault(property)){
        if(housePrice >= minPrice && housePrice <= maxPrice){
          return house.country === country
        }
      }

      if(isDefault(country) &&!isDefault(property) && !isDefault(price)){
        if(housePrice >= minPrice && housePrice <= maxPrice){
          return house.type === property
        }
      }

    });
  
    setTimeout(() => {
      if(newHouses.length < 1) {
        setHouses([])
      } else{
        setHouses(newHouses)
      }
      setLoading(false);
    }, 1000);

  };
  
  return (
    <HouseContext.Provider value={
      {houses, setHouses,
      country, setCountry,
      countries, setCountries,
      property,setProperty,
      properties,setProperties,
      price,setPrice,
      loading,setLoading,
      handleClick,
      }
    }>
      {children}
    </HouseContext.Provider>
  )
};

export default HouseContextProvider;
