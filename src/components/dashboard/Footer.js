import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


class Footer extends Component {
    render() {
        return (
            <div className="footer">
               <div class="container">
                    <div class="row" float="right">
                    <div class="col" id="img1" >
                    <a href="#"><img src="/contact3.png" width="110px" height="100px"/></a>
                         <p><b>Поврзетесе со нас</b></p>
                         <p>Слободно контактирајте не доколку имате<br/>
                            потреба од дополнителни инфорамции.
                         </p>
                        </div>
                    <div class="col" id="img2">
                    <a href="#"><img src="/contact2.png" width="110px" height="100px" /></a>
                         <p><b>Каде да не најдете?</b></p>
                         <p>Лозирани сме во Скопје, Македонија</p>
                        </div>
                        <div class="col-md-4" id="img3">
                         <a href="#"><img src="/contact1.png" width="110px" height="100px" /></a>
                         <p><b>Што правиме ние?</b></p>
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