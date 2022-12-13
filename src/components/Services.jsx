import React from 'react'

import camera from '../assets/camera_icon.png'
import cablestructure from '../assets/cable structure_icon.png'
import cashmanager from '../assets/cash manager_icon.png'
import cloudsolution from '../assets/cloud solution_icon.png'
import trucker from '../assets/trucker_icon.png'
import firealarm from '../assets/fire alarm_icon.png'
import "./services.css";
import Zoom from 'react-reveal/Zoom';
function Services() {
  return (
    <div name='services' className='max-w-[1240px] mx-auto -mt-40'>
          

          <div className='grid grid-cols-1 lg:grid-cols-3  gap-x-8 gap-y-16 px-20 sm:pt-20 text-black'>
          
              <div className='bg-white rounded-xl shadow-2xl'>
               <Zoom>
                  <div className='p-10'>
                     <div class='icons-services'>
                       <img src={camera}  alt='/'/>
                      </div>
                      <h3 className='font-bold text-20 my-6 text-blue text-center'>CCTV Camera Sytems</h3>
                      <p className='text-black text-sm text-center font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis auctor, lobortis ipsum at, dignissim lectus. Donec iaculis gravida libero</p>
                  </div>
                </Zoom>  
              </div>
              
              <div className='bg-white rounded-xl shadow-2xl'>
              <Zoom>
                  <div className='p-10'>
                      <div class='icons-services'>
                       <img src={ firealarm}  alt='/'/>
                      </div>
                      <h3 className='font-bold text-20 my-6 text-blue text-center'>Fire Alarm</h3>
                      <p className='text-black text-sm text-center font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis auctor, lobortis ipsum at, dignissim lectus. Donec iaculis gravida libero</p>
                  </div>
                  </Zoom>
                  
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
              <Zoom>
                  <div className='p-10'>
                     <div class='icons-services'>
                       <img src={cablestructure}  alt='/'/>
                      </div>
                      <h3 className='font-bold text-20 my-6 text-blue text-center'>Structured cabling</h3>
                      <p className='text-black text-sm text-center font-medium '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis auctor, lobortis ipsum at, dignissim lectus. Donec iaculis gravida libero</p>
                  </div>
                </Zoom>   
                  
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
              <Zoom>
                  <div className='p-10'>
                  <div class='icons-services'>
                       <img src={cloudsolution}  alt='/'/>
                      </div>
                      <h3 className='font-bold text-20 my-6 text-blue text-center'>Cloud Solutions</h3>
                      <p className='text-black text-sm text-center font-medium '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis auctor, lobortis ipsum at, dignissim lectus. Donec iaculis gravida libero</p>
                  </div>
                  </Zoom>   
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
              <Zoom>
                  <div className='p-10'>
                  <div class='icons-services'>
                       <img src={trucker}  alt='/'/>
                      </div>
                      <h3 className='font-bold text-20 my-6 text-blue text-center'>Tracking services</h3>
                      <p className='text-black text-sm text-center font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis auctor, lobortis ipsum at, dignissim lectus. Donec iaculis gravida libero</p>
                  </div>
                  
                  </Zoom>  
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
              <Zoom>
                  <div className='p-10'>
                  <div class='icons-services'>
                       <img src={cashmanager}  alt='/'/>
                      </div>
                      <h3 className='font-bold text-3xl my-6 text-blue text-center'>Cash management</h3>
                      <p className='text-black text-sm text-center font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis auctor, lobortis ipsum at, dignissim lectus. Donec iaculis gravida libero</p>
                  </div>
                  </Zoom>  
                  
              </div>
          </div>
      </div>
  )
}

export default Services