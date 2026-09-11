import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Soudamini from './Soudamini'
import Item from './Product'
import products from './products'

function App(){
  const a = 10
  const b = 20 
    return(
    // <div>
    //   <h1>
    // Hello React
    // </h1>
    // <h2>
    //   mentor: Sai Pranab Patra
    // </h2>
    // </div>


    // <React.Fragment>
    //   <h1>
    //  Hello React
    //  </h1>
    //  <h2>
    //    mentor: Sai Pranab Patra
    //  </h2>

    // <Fragment>
    //   <h1>
    //  Hello React
    //  </h1>
    //  <h2>
    //    mentor: Sai Pranab Patra
    //  </h2>

    // </Fragment>


    <>
      <h1 style={{backgroundColor:'red',color:'yellow'}}>
     Hello React
     </h1>
     <h2>
       mentor: Sai Pranab Patra
     </h2>
     <p> a is :{a}</p>
     <p> b is :{b}</p>
     <p> a + b is :{a + b}</p>
     
    {/* {Soudamini()}
    <Soudamini></Soudamini> */}
    <Soudamini />

    {/* <Item name="watch" price="2500" description="This is a watch" brand="rolex" />
    <Item name="Mobiles" price="30000.99" brand="Samsung"/> */}
    {products.map(p =>(
      <Item name = {p.name} price={p.price} description={p.description} brand = {p.brand}/>
    ))}
    </>
  )
  
}

export default App


