import React, { useState } from 'react'
import SelectMenu from './SelectMenu'
import SearchBar from './SearchBar'
import CountriesList from './CountriesList'

const Home = () => {
  const [query, setQuery] = useState("")

  return (
    <>
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu />
        </div>
        <CountriesList query={query} />
      </main>
    </>
  )
}

export default Home