import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { signOut } from '../../store/actions/authActions'
import { NavLink } from 'react-router-dom'


class Footer extends Component {
    render() {
        return (
            <div className="footer">
               <div class="container" id = "contactFoo">
                    <div class="row" float="right">
                    <div class="col" id="img1" >
                    <a href="#"><img src="/contact3.png" width="110px" height="100px"/>
                    <br/>
                    <NavLink to='/zaNas' id="kreiraj_proekt"><b>Што правиме ние?</b></NavLink></a>
                   
                         
                         <p>Активирај се за зачувување на <br/>
                         животната средина и добиј попусти!</p>
                        </div>
                    <div class="col" id="img2">
                    <a href="#"><img src="/contact2.png" width="110px" height="100px"/>
                    <br/>
                    <NavLink to='/signup' id="kreiraj_proekt"><b>Активирај се и ти!</b></NavLink></a>
                         <p>Стани дел од групата корисници,<br/>кои се грижат за зелената површина!</p>
                        </div>
                        <div class="col-md-4" id="img3">
                         <a href="#"><img src="/contact1.png" width="110px" height="100px" /></a>
                         <p><b>Не лутај,прашај!</b></p>
                         <p>Помагаме да се засадат што<br/>
                              повеќе дрва како мене</p>
                        </div>
                    </div>
                    </div>
                   
                   
               
            </div>

        );
    }
}


export default Footer;