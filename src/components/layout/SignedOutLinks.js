import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/signup'>Регистрација</NavLink></li>
        <li><NavLink to='/signin'>Најава</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks