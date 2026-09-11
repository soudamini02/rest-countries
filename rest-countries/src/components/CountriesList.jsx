import { useEffect, useState } from "react";
import countriesData from "../countriesData";
import CountryCard from "./CountryCard";

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([])

  const filteredCountries = countriesData.filter(country =>
    country.names.common.toLowerCase().includes(query.toLowerCase()))
    
    useEffect(() => {
      console.log("useEffect called")

      fetch(
  'https://api.restcountries.com/countries/v5?response_fields=names.common,capitals,flag.ur-svg,region,population & limit = 100',
  { 
    headers:
     { 'Authorization': 'Bearer rc_live_c568b07aee8c41f4aba6484619b4f62c' } }
      )
        .then((response) => response.json())
        .then((result) => {
          // console.log("result is", result)
          setCountriesData(result.data.objects)
        })
    }, [])

  /*
    useEffect =>
      - to perform something on the mount (first render) of the component
      - to perform something when state is changed
      - to perform something when the component is unmount (removed) from the web page

    syntax :-
      useEffect(callback fn, dependency array)

      dependency array:- 
        is not available -> useEffect will be called on every render & re-render 
        is [] -> useEffect is only called once
        is [state] -> useEffect will only called on render & on the state change
  */

  console.log("CountriesList Component", countriesData)

  return (
    <>
      <div className="countries-container">
        {
          filteredCountries.length != 0 ?
            (filteredCountries.map((country, idx) => (
              <CountryCard
                key={idx}
                flag={country.flag.url_svg || "www.google.com"}
                name={country.names.common}
                population={country.population}
                capital={country.capitals}
                region={country.region}
              />)))
            :
            <p>Unable to find Country with name:- {query}</p>
        }
      </div>
    </>
  )
}