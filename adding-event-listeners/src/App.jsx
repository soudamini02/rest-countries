import './App.css'
import CustomButton from './Custombutton'

function App() {

  const handleClick = (e, name) => {
    // console.log("paragraph clicked",e)
    console.log("paragraph clicked:-", name,e)

  }
  function handleChange(e) {
    // console.log("Input change:-",e.target.name, "->", e.target.value)
    const {name, value} = e.target
    console.log("Input change detected:-", name, "->",value)

  }

  return (
    <>
    {/* <p onClick={() => console.log("p clicked!!!")}>Click Here...</p> */}
    {/* <p onClick={(e) => console.log("p clicked!!!",e)}>Click Here...</p> */}
    {/* <p onClick={handleClick()}>Click Here...</p> */}

    {/* <p onClick={handleClick()}>Click Here...</p> */}
    {/* <p onDoubleClick={handleClick()}>DoubleClick Here...</p> */}

    <p onClick={(e) => handleClick(e, "React")}> Click Here...</p>

    <input type='text' name='username' onChange={handleChange}/>
    <input type='text' name='password' onChange={handleChange}/>
    
    <CustomButton value={'Hiii'} 
  clickMe={(e)=> console.log("Custom button clicked")}/>
    </>
  )
}
export default App