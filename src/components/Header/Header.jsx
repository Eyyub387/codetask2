import React from 'react'
import style from './Header.module.css'
export const Header = () => {
  return (
    <>

    <div className={style.headone}>
       <nav>
        <ul>
          <li><a href="">HOME</a></li>
          <li><a href="">PORTFOLIO</a></li>
          <li><a href="">RESUME</a></li>
          <li><a href="">ABOUT</a></li>
          <li><a href="">CONTACT</a></li>
        </ul>
       </nav>
    </div>

    </>
  )
}
