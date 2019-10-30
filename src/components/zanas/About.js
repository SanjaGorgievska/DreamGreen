import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


const About = ({}) => {
    return (
 
       <div id="aboutUs">
         <h1>За нас</h1>
         <div id="aboutContent">
         <p>Засади дрво и добиј попуст!</p>
         <p>Основани со цел да ја поттикнеме иницијативата и свеста на граѓаните за поголема зелена површина.</p>
         <p>Како корисникот би можел да го добие попустот?</p>
         <p>Со фоторафија од засадено дрво, добивате попуст во одредени локали како награда за вашиот акт и влијание на животната средина</p>
       </div> 

       </div>
      
     
 
    );
  }

export default About