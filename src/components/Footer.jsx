import React from 'react'

import logo from '../assets/securetech_logo.png'
function Footer() {
  return (
<>
    <div className=' mx-auto bg-black   '>
    <div className='grid grid-cols-1 lg:grid-cols-3  gap-x-8 gap-y-16  pt-8 sm:pt-20  '>
      <div className='px-10  py-8   '>
       {/* Logo */}
       <h1 className='text-white font-extrabold hover:text-blue mb-10'>Powered By:</h1>  
       {" "}
       <a href="home" className="nav__brand text-white font-serif textbold">
       <img src={logo} alt=""/>
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
       {/* <p className='text-white py-3'>
       <PhoneIcon sx={{ fontSize: 30 }} className='text-white  '/>
       {" "} +250 756 974 982
       </p>
       
       <p className='text-white py-3'>
       <FacebookOutlinedIcon sx={{ fontSize: 30 }} className='text-white  '/>
       {" "} Fintech@
       </p>
       <p className='text-white py-3'>
       <SubscriptionsRoundedIcon sx={{ fontSize: 30 }} className='text-white  '/>
       {" "} Fintech
       </p> */}
       </div>
       
       
</div>
</div>


</>
  )
}

export default Footer