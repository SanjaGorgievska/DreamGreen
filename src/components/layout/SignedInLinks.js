import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right" id="signin1">
      <li id="nov_proekt"><NavLink to='/create' id="kreiraj_proekt">Дома</NavLink></li>
      <li id="nov_proekt"><NavLink to='/zaNas' id="kreiraj_proekt">За нас</NavLink></li>
        <li id="nov_proekt"><NavLink to='/promotions' id="kreiraj_proekt">Промоции</NavLink></li>
        <li id="nov_proekt"><NavLink to='/create' id="kreiraj_proekt">Пријави еко акт</NavLink></li>
        <li id="odjava1"><a onClick={props.signOut}>Одјава</a></li>
        <li id="licen_profil"><NavLink to='/' className="btn btn-floating blue lighten-1">
          {props.profile.initials}
        </NavLink></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)