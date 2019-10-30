import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import Img1 from './img1.jpg';

const Navbar = (props) => {
  const { auth, profile } = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  return (
    <nav className="green" id="menu">
     <div className="container" >
        <div className="row">
            <div className="col-md-2">
            <h1 className="green-text" id="dream">DREAM</h1>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-2"></div>
            <div className="col-md-2"></div>
           </div>

        {links}

      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
 console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)