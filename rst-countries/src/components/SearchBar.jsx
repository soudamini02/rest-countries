export default function SearchBar({ setQuery }) {
  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Search for a country..." onChange={handleChange} />
    </div>
  )
}