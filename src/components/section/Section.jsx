import React from 'react'
import style from './Section.module.css'
const Section = () => {
  return (
    <>
    <div className={style.contanier}>

      <div className={style.bos}>
      </div>


      <div className={style.write}>
        <p>Hello, I'm</p>
        <h1>Charles Anderson</h1>
        <h3>And this is My Rezume</h3>
      </div>
    </div>
    </>
  )
}

export default Section