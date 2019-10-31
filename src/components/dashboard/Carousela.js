import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import {Component,Fragment} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from './Footer'





class Carousela extends React.Component {
    render() {
        const mystyle = {
            backgroundColor: 'white',
        }
        
        return (

            
            <div style={mystyle}>
                
                <Carousel autoPlay showThumbs={false} className="carouslePhoto">
      <div style={{ height: '70vh' }}>
        <img style={{ height: '100%', objectFit: 'cover' }} src="/zena.jpeg" />
        <p className="legend">Legend 1</p>
      </div>
      <div style={{ height: '70vh' }}>
        <img style={{ height: '100%', objectFit: 'cover' }} src="/maz.jpeg" />
        <p className="legend">Legend 2</p>
      </div>
      <div style={{ height: '70vh' }}>
        <img style={{ height: '100%', objectFit: 'cover' }} src="/zena2.jpeg" />
        <p className="legend">Legend 3</p>
      </div>
      
    </Carousel>
            
            <Footer/>            

            
            </div>

           

        );
    }
}


export default Carousela;