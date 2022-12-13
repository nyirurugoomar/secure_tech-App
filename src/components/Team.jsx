import React from 'react'
import Zoom from 'react-reveal/Zoom';
import img1 from '../assets/img1_team.png'
import img2 from '../assets/img2_team.png'
import img3 from '../assets/img3_team.png'


function Team() {
  return (
    <>
    <h1 className='text-black font-bold text-center text-xxl mt-90'>Our Team</h1>
    <div className='grid grid-cols-1 lg:grid-cols-3  gap-x-8 gap-y-16 px-20 sm:pt-20 text-black mb-20'>
                  
              <div className=' '>
              <Zoom>
                  <div className='p-1 '>
                      <img src={img1} alt=''/>
                      <h3 className='font-medium mt-1 text-20'>Founder</h3>
                      <h1 className='font-bold text-32'>John Mike</h1>
                  </div>
                  </Zoom>
                  
              </div>
              <div className=''>
              <Zoom>
                  <div className='p-1'>
                     
                  <img src={img2} alt=''/>
                  <h3 className='font-medium mt-1 text-20'>Security Office</h3>
                      <h1 className='font-bold text-32'>John Mike</h1>

                  </div>
                </Zoom>   
                  
              </div>
              <div className=''>
              <Zoom>
                  <div className='p-1'>
                 
                  <img src={img3} alt=''/>
                  <h3 className='font-medium mt-1 text-20'>Sales Manager</h3>
                      <h1 className='font-bold text-32'>John Mike</h1>
                  </div>
                  </Zoom>   
              </div>
              
         
          </div>
          </>
     
  )
}

export default Team