import React from 'react'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import imgmission from '../assets/mission_image.png'
import iconmission from '../assets/mission_icon.png'
import iconoffering from '../assets/offering_icon.png'
import imgoffering from '../assets/offering_img.png'
function Whoweare() {
  return (
    <>
    <div className='w-full h-screen  flex flex-col justify-between mt-20 '>
        <h1 className='text-black font-bold text-center text-xxl'>Who We Are</h1>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto mb-40 mt-20'>
          
           <Fade left>
            <div>
                <img className='w-full px-10' src={imgmission}alt='/'/>
            </div>
            </Fade>

            <Zoom>
           <div className='flex flex-col justify-center md:items-start w-full px-10 py-20  '>
                  <div class='w-20 h-20'>
                    <img src={iconmission} alt="" />
                   </div>
                   <h1 className='text-36 font-bold'>Our Mission</h1>
                   
               
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis auctor, 
                    lobortis ipsum at, dignissim lectus. Donec iaculis gravida libero et suscipi</p>
                    
               
               
           </div>
           </Zoom>
            
        </div>



        
    </div>
                     
    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto mb-40 '>
          
          <Zoom>
         <div className='flex flex-col justify-center md:items-start w-full px-10 py-20  '>
                <div class='w-20 h-20'>
                  <img src={iconoffering} alt="" />
                 </div>
                 <h1 className='text-36 font-bold'>Our Mission</h1>
             
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis auctor, 
                  lobortis ipsum at, dignissim lectus. Donec iaculis gravida libero et suscipi</p>
                  
             
             
         </div>
         </Zoom>

         <Fade right>
          <div>
              <img className='w-full px-10' src={imgoffering}alt='/'/>
          </div>
          </Fade>
          
      </div>
    

    </>
  )
}

export default Whoweare