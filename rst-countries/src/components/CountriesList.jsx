import { useState } from "react";
import CountriesData from "./countriesData";
import CountryCard from "./CountryCard";

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([])

  const filteredCountries = countriesData.filter(country =>
    country.names.common.toLowerCase().includes(query.toLowerCase()))

  fetch('https://api.restcountries.com/countries/v5?response_fields=names.common,capitals,flag.url_svg,region,population&limit=100',
    {
      headers: {
        'Authorization': 'Bearer rc_live_d48b508f8bd04db9a9a9b751ac01253e'
      }
    }
  )
    .then((response) => response.json())
    .then((result) => {
      console.log("result is", result)
      setCountriesData(result.data.objects)
    })

  console.log("////////", countriesData)

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