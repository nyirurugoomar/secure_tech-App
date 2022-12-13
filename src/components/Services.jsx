import React from 'react'

import camera from '../assets/camera_icon.png'
import cablestructure from '../assets/cable structure_icon.png'
import cashmanager from '../assets/cash manager_icon.png'
import cloudsolution from '../assets/cloud solution_icon.png'
import trucker from '../assets/trucker_icon.png'
import firealarm from '../assets/fire alarm_icon.png'
import "./services.css";
function Services() {
  return (
    <div name='services' className='max-w-[1240px] mx-auto -mt-40'>
          

          <div className='grid grid-cols-1 lg:grid-cols-3  gap-x-8 gap-y-16 px-4 sm:pt-20 text-black'>
          
              <div className='bg-white rounded-xl shadow-2xl'>
              
                  <div className='p-10'>
                     <div class='icons-services'>
                       <img src={camera}  alt='/'/>
                      </div>
                      <h3 className='font-bold text-20 my-6 text-blue text-center'>CCTV Camera Sytems</h3>
                      <p className='text-black text-sm text-center font-medium'>We allow peers to transfer money to each other or merchants receive payments from customers.</p>
                  </div>
                  
              </div>
              
              <div className='bg-white rounded-xl shadow-2xl'>
              
                  <div className='p-10'>
                      <div class='icons-services'>
                       <img src={ firealarm}  alt='/'/>
                      </div>
                      <h3 className='font-bold text-20 my-6 text-blue text-center'>Fire Alarm</h3>
                      <p className='text-black text-sm text-center font-medium'>have disrupted traditional funding options by allowing platform users to invest their money in businesses, products and individuals.</p>
                  </div>
                
                  
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
              
                  <div className='p-10'>
                     <div class='icons-services'>
                       <img src={cablestructure}  alt='/'/>
                      </div>
                      <h3 className='font-bold text-20 my-6 text-blue text-center'>Structured cabling</h3>
                      <p className='text-black text-sm text-center font-medium '>Cryptocurrency exchanges, such as Coinbase and Gemini, allow users to buy or sell cryptocurrencies. Blockchain technologies also have the potential to move into industries outside of finance to reduce fraud</p>
                  </div>
                  
                  
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
              
                  <div className='p-10'>
                  <div class='icons-services'>
                       <img src={cloudsolution}  alt='/'/>
                      </div>
                      <h3 className='font-bold text-20 my-6 text-blue text-center'>Cloud Solutions</h3>
                      <p className='text-black text-sm text-center font-medium '>We aim to  make it easier for customers to buy insurance products including life insurance and policies for small businesses.</p>
                  </div>
                   
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
              
                  <div className='p-10'>
                  <div class='icons-services'>
                       <img src={trucker}  alt='/'/>
                      </div>
                      <h3 className='font-bold text-20 my-6 text-blue text-center'>Tracking services</h3>
                      <p className='text-black text-sm text-center font-medium'>consist of algorithm-based portfolio recommendations and management to lower costs and increase efficiency. Some popular robo-advising services</p>
                  </div>
                  
                  
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
              
                  <div className='p-10'>
                  <div class='icons-services'>
                       <img src={cashmanager}  alt='/'/>
                      </div>
                      <h3 className='font-bold text-3xl my-6 text-blue text-center'>Cash management</h3>
                      <p className='text-black text-sm text-center font-medium'>We have become a popular and innovative example of fintech as investors can trade stocks from anywhere with their mobile device instead of visiting a stockbroker.</p>
                  </div>
                  
                  
              </div>
          </div>
      </div>
  )
}

export default Services