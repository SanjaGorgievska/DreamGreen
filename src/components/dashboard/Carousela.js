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
        <img style={{ height: '100%', objectFit: 'cover' }} src="https://wallpaperaccess.com/full/1543715.jpg" />
       
      </div>
      <div style={{ height: '70vh' }}>
        <img style={{ height: '100%', objectFit: 'cover' }} src="https://images.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        
      </div>
      <div style={{ height: '70vh' }}>
        <img style={{ height: '100%', objectFit: 'cover' }} src="https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
       
      </div>
      
    </Carousel>
            
            <Footer/>            

            
            </div>

           

        );
    }
}


export default Carousela;