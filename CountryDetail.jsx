import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router"
import "./CountryDetails.css"
import Header from "./Header"

export default function CountryDetail() {
  const [countryData, setCountryData] = useState(null)
  const [countryNotFound, setCountryNotFound] = useState(false)
  const { country } = useParams()
  console.log("......", country)
  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:3000/countries?names.common=" + country)
      .then(resp => resp.json())
      .then(res => {
        // console.log(res)
        // setCountryData(res[0])

        if(!res.length) {
          setCountryNotFound(true)
          return
        }

        Promise.all(res[0].borders.map(border =>
          fetch("Http://localhost:3000/countries?codes.alpha_3=" + border)
            .then(resp => resp.json())
            .then(res1 => ({border: res1[0].codes.alpha_3, c_name: res1[0].names.common}))
        ))
          .then(borders => {
            // console.log("####", borders)
            // console.log("11111111", res[0])
            // console.log("2222222222", {...res[0], borders: [...borders]})
            setCountryData({...res[0], borders: [...borders]})
          })
      })
  }, [country])

  if(countryNotFound) {
    return <h2 style={{textAlign: 'center'}}>Country Not Found!!!</h2>
  }

  return (
    <>
    <main>
      {
        countryData === null ? <p>Loading...</p> : (
          <div className="country-details-container">
            <span className="back-button" onClick={() => navigate("/")}>
              <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
            </span>
            <div className="country-details">
              <img src={countryData.flag.url_svg} alt="#" />
              <div className="details-text-container">
                <h1>Country Name: {countryData.names.common}</h1>
                <div className="details-text">
                  <p>
                    <b>Native Name: {Object.values(countryData.names.native)[0]?.common || 'N/A'} </b>
                    <span className="native-name"></span>
                  </p>
                  <p>
                    <b>
                      Population: {countryData.population}
                    </b>
                    <span className="population"></span>
                  </p>
                  <p>
                    <b>Region: {countryData.region}</b>
                    <span className="region"></span>
                  </p>
                  <p>
                    <b>Sub Region: {countryData.subregion} </b>
                    <span className="sub-region"></span>
                  </p>
                  <p>
                    <b>Capital: {countryData.capitals.map(cap => cap.name).join(", ")} </b>
                    <span className="capital"></span>
                  </p>
                  <p>
                    <b>Top Level Domain: {countryData.tlds.join(", ")} </b>
                    <span className="top-level-domain"></span>
                  </p>
                  <p>
                    <b>Currencies: {countryData.currencies.map(curr => curr.symbol)} </b>
                    <span className="currencies"></span>
                  </p>
                  <p>
                    <b>Languages: {countryData.languages.map(lan => lan.name).join(", ")} </b>
                    <span className="languages"></span>
                  </p>
                </div>
                <div className="border-countries">
                  <b>Border Countries: {countryData.borders.map(b => <Link key={b.border} to={`/${b.c_name}`}>{b.border}</Link>) || 'N/A'} </b>&nbsp;
                </div>
              </div>
            </div>
          </div>
        )
      }
    </main>
    </>
  )
}