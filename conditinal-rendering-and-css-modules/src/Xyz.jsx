import React from 'react'
// import "./App.css"
import styles from "./Xyz.module.css"

const Xyz = () => {
    console.log("styles inside Xyz", styles)
  return (
    <>
    <div>Xyz</div>
      {/*<p className='bg-green'>asdasdas</p>*/}
      <p className={`${styles.textYello} ${styles['bg-green']}`}>asdasdas</p>
      </>
  )
}

export default Xyz