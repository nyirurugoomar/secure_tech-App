import React from 'react'

import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

import logo from '../assets/securetech_logo.png'
function Footer() {
  return (
<>
    <div className=' mx-auto bg-black   '>
    <div className='grid grid-cols-1 lg:grid-cols-3  gap-x-8 gap-y-16  pt-8 sm:pt-20  '>
      <div className='px-10  py-8   '>
       {/* Logo */}
       <h1 className='text-white font-extrabold hover:text-blue mb-5'>Powered By:</h1>  
       {" "}
       <a href="home" className="nav__brand text-white font-serif textbold">
       <img src={logo} style={{width:'200px'}} alt=""/>
      </a>
       </div>
       <div className='px-20  py-8  '>
       {/* Quick link */}
       <h1 className='text-white font-extrabold'>QUICK LINK</h1>
        <a href="home" className="nav__link text-white hover:text-blue">
                Home
        </a>
            <br/>
        <a href="about" className="nav__link text-white hover:text-blue">
            About
        </a>
        <br/>
        <a href="services" className="nav__link text-white hover:text-blue">
                Services
        </a>
        <br/>
        <a href="contact" className="nav__link text-white hover:text-blue">
                Contact
        </a>
       </div>
       <div className='  px-20  py-8   '>
       {/* Get in touch */}
       <h1 className='text-white font-extrabold'>GET IN TOUCH</h1>
       <p className='text-white py-1 hover:text-blue cursor-pointer'>
       <EmailIcon sx={{ fontSize: 20 }} className='text-white  '/>
       {" "} SecureTech@gmail.com
       </p>
       <p className='text-white py-1 hover:text-blue cursor-pointer'>
       <TwitterIcon sx={{ fontSize: 20 }} className='text-white  '/>
       {" "} SecureTech@
       </p>
       <p className='text-white py-1 hover:text-blue cursor-pointer'>
       <PhoneIcon sx={{ fontSize: 20 }} className='text-white  '/>
       {" "} +250 756 974 982
       </p>
       
       
       
       </div>
       
       
</div>
</div>

<div className='text-center p-4 mx-auto px-10 text-white' style={{ backgroundColor: 'black' }}>
        ©  Copyright: 
        {" "}
        <h4 className='text-white text-bold' >
          Secure Tech 2022 All rights reserved
        </h4>
        </div>

</>
  )
}

export default Footer