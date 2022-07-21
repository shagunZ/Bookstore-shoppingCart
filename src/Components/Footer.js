
import React from 'react'
import '../App.css';
export const Footer = () => {
  return (
    <div >
      
      
      
    <div className="footbar " >
       
        <ul className="list footlist">
            <li><a style={{padding:'5px',margin:'7px'}}href="#"><i class="fa-brands fa-facebook fa-3x"></i></a></li>
            <li><a style={{padding:'5px',margin:'7px'}}href="#about"><i class="fa-brands fa-instagram fa-3x"></i></a></li>
            <li><a style={{padding:'5px',margin:'7px'}}href="#"><i class="fa-brands fa-twitter-square fa-3x"></i></a></li>
            <li><a style={{padding:'5px',margin:'7px'}}href="#contact"><i class="fa-brands fa-linkedin fa-3x"></i></a></li>
        </ul>
              
         <div className='rightnav'>
           <ul >
       
           <li><a href="#">Copyright © 2022 Apple Inc. All rights reserved.</a></li>
           <li><a href="#">T&C</a></li>
           
           </ul>

          
    </div>
    </div>


    </div>
  )
}

 export default Footer